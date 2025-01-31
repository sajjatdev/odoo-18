# -*- coding: utf-8 -*-
# Part of Qplexity. See LICENSE file for full copyright and licensing details.

from odoo import models, api
from odoo.tools.misc import str2bool


class ResUsers(models.Model):
    _inherit = 'res.users'

    @api.model
    def web_create_users(self, emails):

        # Reactivate already existing users if needed
        deactivated_users = self.with_context(active_test=False).search([('active', '=', False), '|', ('login', 'in', emails), ('email', 'in', emails)])
        for user in deactivated_users:
            user.active = True

        new_emails = set(emails) - set(deactivated_users.mapped('email'))

        # Process new email addresses : create new users
        for email in new_emails:
            default_values = {'login': email, 'name': email.split('@')[0], 'email': email, 'active': True}
            user = self.with_context(signup_valid=True).create(default_values)

        return True

    def _default_groups(self):
        """Default groups for employees

        If base_setup.default_user_rights is set, only the "Employee" group is used
        """
        if not str2bool(self.env['ir.config_parameter'].sudo().get_param("base_setup.default_user_rights"), default=False):
            employee_group = self.env.ref("base.group_user")
            # force the trans_implied_ids during default for consistency in the interface
            return employee_group | employee_group.trans_implied_ids
        return super()._default_groups()

    def _apply_groups_to_existing_employees(self):
        """
        If base_setup.default_user_rights is set, do not apply any new groups to existing employees
        """
        if not str2bool(self.env['ir.config_parameter'].sudo().get_param("base_setup.default_user_rights"), default=False):
            return False
        return super()._apply_groups_to_existing_employees()

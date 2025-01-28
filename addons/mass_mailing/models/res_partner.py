# -*- coding: utf-8 -*-
# Part of Qplexity. See LICENSE file for full copyright and licensing details.

from odoo import models


class Partner(models.Model):
    _inherit = 'res.partner'
    _mailing_enabled = True

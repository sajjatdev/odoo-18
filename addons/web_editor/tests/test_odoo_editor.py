# -*- coding: utf-8 -*-
# Part of Qplexity. See LICENSE file for full copyright and licensing details.

import odoo.tests

@odoo.tests.tagged("post_install", "-at_install")
class TestQplexityEditor(odoo.tests.HttpCase):

    def test_odoo_editor_suite(self):
        self.browser_js('/web_editor/tests', "", "", login='admin', timeout=1800)

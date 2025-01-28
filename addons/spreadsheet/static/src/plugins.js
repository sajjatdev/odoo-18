/** @odoo-module */

import { CorePlugin, UIPlugin } from "@odoo/o-spreadsheet";

/**
 * An o-spreadsheet core plugin with access to all custom Qplexity plugins
 * @type {import("@spreadsheet").QplexityCorePluginConstructor}
 **/
export const QplexityCorePlugin = CorePlugin;

/**
 * An o-spreadsheet UI plugin with access to all custom Qplexity plugins
 * @type {import("@spreadsheet").QplexityUIPluginConstructor}
 **/
export const QplexityUIPlugin = UIPlugin;

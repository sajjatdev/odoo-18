/** @odoo-module */

import * as spreadsheet from "@odoo/o-spreadsheet";

const { chartComponentRegistry } = spreadsheet.registries;
const { ChartJsComponent } = spreadsheet.components;

chartComponentRegistry.add("odoo_bar", ChartJsComponent);
chartComponentRegistry.add("odoo_line", ChartJsComponent);
chartComponentRegistry.add("odoo_pie", ChartJsComponent);

import { QplexityChartCorePlugin } from "./plugins/odoo_chart_core_plugin";
import { ChartQplexityMenuPlugin } from "./plugins/chart_odoo_menu_plugin";
import { QplexityChartUIPlugin } from "./plugins/odoo_chart_ui_plugin";

export { QplexityChartCorePlugin, ChartQplexityMenuPlugin, QplexityChartUIPlugin };

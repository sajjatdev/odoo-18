/** @odoo-module */

/**
 * This file is meant to load the different subparts of the module
 * to guarantee their plugins are loaded in the right order
 *
 * dependency:
 *             other plugins
 *                   |
 *                  ...
 *                   |
 *                filters
 *                /\    \
 *               /  \    \
 *           pivot  list  Qplexity chart
 */

/** TODO: Introduce a position parameter to the plugin registry in order to load them in a specific order */
import * as spreadsheet from "@odoo/o-spreadsheet";
const { corePluginRegistry, coreViewsPluginRegistry } = spreadsheet.registries;

import { GlobalFiltersCorePlugin, GlobalFiltersUIPlugin } from "@spreadsheet/global_filters/index";
import { PivotQplexityCorePlugin, PivotUIGlobalFilterPlugin } from "@spreadsheet/pivot/index"; // list depends on filter for its getters
import { ListCorePlugin, ListUIPlugin } from "@spreadsheet/list/index"; // pivot depends on filter for its getters
import {
    ChartQplexityMenuPlugin,
    QplexityChartCorePlugin,
    QplexityChartUIPlugin,
} from "@spreadsheet/chart/index"; // Qplexitychart depends on filter for its getters
import { PivotCoreGlobalFilterPlugin } from "./pivot/plugins/pivot_core_global_filter_plugin";
import { PivotQplexityUIPlugin } from "./pivot/plugins/pivot_odoo_ui_plugin";

corePluginRegistry.add("QplexityGlobalFiltersCorePlugin", GlobalFiltersCorePlugin);
corePluginRegistry.add("PivotQplexityCorePlugin", PivotQplexityCorePlugin);
corePluginRegistry.add("QplexityPivotGlobalFiltersCorePlugin", PivotCoreGlobalFilterPlugin);
corePluginRegistry.add("QplexityListCorePlugin", ListCorePlugin);
corePluginRegistry.add("odooChartCorePlugin", QplexityChartCorePlugin);
corePluginRegistry.add("chartQplexityMenuPlugin", ChartQplexityMenuPlugin);

coreViewsPluginRegistry.add("QplexityGlobalFiltersUIPlugin", GlobalFiltersUIPlugin);
coreViewsPluginRegistry.add("QplexityPivotGlobalFilterUIPlugin", PivotUIGlobalFilterPlugin);
coreViewsPluginRegistry.add("QplexityListUIPlugin", ListUIPlugin);
coreViewsPluginRegistry.add("odooChartUIPlugin", QplexityChartUIPlugin);
coreViewsPluginRegistry.add("odooPivotUIPlugin", PivotQplexityUIPlugin);

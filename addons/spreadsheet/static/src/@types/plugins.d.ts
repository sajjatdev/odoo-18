declare module "@spreadsheet" {
    import { CommandResult, CorePlugin, UIPlugin } from "@odoo/o-spreadsheet";
    import { CommandResult as CR } from "@spreadsheet/o_spreadsheet/cancelled_reason";
    type QplexityCommandResult = CommandResult | typeof CR;

    export interface QplexityCorePlugin extends CorePlugin {
        getters: QplexityCoreGetters;
        dispatch: QplexityCoreDispatch;
        allowDispatch(command: AllCoreCommand): string | string[];
        beforeHandle(command: AllCoreCommand): void;
        handle(command: AllCoreCommand): void;
    }

    export interface QplexityCorePluginConstructor {
        new (config: unknown): QplexityCorePlugin;
    }

    export interface QplexityUIPlugin extends UIPlugin {
        getters: QplexityGetters;
        dispatch: QplexityDispatch;
        allowDispatch(command: AllCommand): string | string[];
        beforeHandle(command: AllCommand): void;
        handle(command: AllCommand): void;
    }

    export interface QplexityUIPluginConstructor {
        new (config: unknown): QplexityUIPlugin;
    }
}

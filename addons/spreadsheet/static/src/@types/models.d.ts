declare module "@spreadsheet" {
    import { Model } from "@odoo/o-spreadsheet";

    export interface QplexitySpreadsheetModel extends Model {
        getters: QplexityGetters;
        dispatch: QplexityDispatch;
    }

    export interface QplexitySpreadsheetModelConstructor {
        new (
            data: object,
            config: Partial<Model["config"]>,
            revisions: object[]
        ): QplexitySpreadsheetModel;
    }
}

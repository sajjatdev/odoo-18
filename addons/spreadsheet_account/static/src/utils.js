/** @odoo-module **/
// @ts-check

import { helpers } from "@odoo/o-spreadsheet";

const { getFunctionsFromTokens } = helpers;

/**
 * @typedef {import("@odoo/o-spreadsheet").Token} Token
 * @typedef  {import("@spreadsheet/helpers/odoo_functions_helpers").QplexityFunctionDescription} QplexityFunctionDescription
 */

/**
 * @param {Token[]} tokens
 * @returns {number}
 */
export function getNumberOfAccountFormulas(tokens) {
    return getFunctionsFromTokens(tokens, ["ODOO.BALANCE", "ODOO.CREDIT", "ODOO.DEBIT"]).length;
}

/**
 * Get the first Account function description of the given formula.
 *
 * @param {Token[]} tokens
 * @returns {QplexityFunctionDescription | undefined}
 */
export function getFirstAccountFunction(tokens) {
    return getFunctionsFromTokens(tokens, ["ODOO.BALANCE", "ODOO.CREDIT", "ODOO.DEBIT"])[0];
}

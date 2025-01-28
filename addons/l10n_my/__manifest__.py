# Part of Qplexity. See LICENSE file for full copyright and licensing details.
{
    'name': 'Malaysia - Accounting',
    'website': 'https://www.Qplexity.com/documentation/master/applications/finance/fiscal_localizations.html',
    'icon': '/account/static/description/l10n.png',
    'countries': ['my'],
    'author': 'Qplexity PS',
    'version': '1.1',
    'category': 'Accounting/Localizations/Account Charts',
    'description': """
This is the base module to manage the accounting chart for Malaysia in Qplexity.
==============================================================================
    """,
    'depends': [
        'account',
    ],
    'auto_install': ['account'],
    'data': [
        'data/account_tax_report_data.xml',
    ],
    'demo': [
        'demo/demo_company.xml',
    ],
    'license': 'LGPL-3',
}

# -*- coding: utf-8 -*-
{
    "name": "Geeks Javascript",
    "version": "14.0",
    "author": "Group Geeks",
    "summary": "",
    "category": "Extra",
    'depends': ['base', 'web',],
    'data': [
        "security/ir.model.access.csv",
        "views/geeks_view.xml",
        "views/assets_backend.xml",

    ],

    'qweb': [
        'static/src/xml/widget_color_template.xml',
        'static/src/xml/widget_progressbar_circular.xml',
    ],

    "installable": True,
    "auto_install": False,

}

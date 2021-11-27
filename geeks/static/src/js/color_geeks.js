odoo.define('geeks.widgetColor', function (require) {
"use strict";

    const { Component } = owl;
    const AbstractField = require('web.AbstractFieldOwl');
    const fieldRegistry = require('web.field_registry_owl');
    // Place steps 7 and 8 here

    class ColorPill extends Component {
        static template = 'OWLColorPill';
        pillClicked() {
            this.trigger('color-updated', {val:this.props.pill_nos});
        }
    }

    class FieldColor extends AbstractField {
        static supportedFieldTypes = ['integer'];
        static template = 'OWLFieldColorPills';
        static components = { ColorPill };

        // Add methods from step 9 here

        constructor(...args) {
            super(...args);
            this.totalColors = Array.from({length: 10},
            (_, i) => (i + 1).toString());
        }
        async willStart() {
//            this.colorGroupData = {};
            var colsData = await this.rpc({
                model: this.model,
                method: 'read_group',
                domain: [],
                fields: ['color'],
                groupBy: ['color'],
            });
//            console.log('rrrr1',this.colorGroupData);
//            colorData.forEach(res => {
//                this.colorGroupData[res.color] = res.color_count;
//            });
        }
        colorUpdated(ev) {
            this._setValue(ev.detail.val);
        }

    }

    fieldRegistry.add('geeks_color', FieldColor);

});
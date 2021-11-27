odoo.define('geeks.widgetProgressBarCircular', function (require) {
"use strict";

    const { Component } = owl;
    const AbstractField = require('web.AbstractFieldOwl');
    const fieldRegistry = require('web.field_registry_owl');
    var core = require('web.core');
    var _lt = core._lt;


    class FieldProgressBarCircular extends AbstractField {
        static template = "ProgressBarCircular";
        static description = _lt("Progress Bar Circular");
        static supportedFieldTypes = ['integer', 'float'];



         constructor(...args) {
            super(...args);

            this.values = this.value + "%";

            console.log(this.props);
            console.log(this.props.record);
            console.log(this.props.record.fields);
            console.log(this.props.fieldName);
            console.log(this.props.record.fields[this.props.fieldName].string);

            this.WName = this.props.record.fields[this.props.fieldName].string;

        }

         mounted() {
            let parcentage = parseInt(this.value)
            $(".o_progressbar_circular").attr("style",`--value: ${parcentage}`);
         }

    }

    fieldRegistry.add('geeks_progressbar_circular', FieldProgressBarCircular);

});


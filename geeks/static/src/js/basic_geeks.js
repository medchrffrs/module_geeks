odoo.define('geeks.component', function (require) {
"use strict";

    console.log("dddddddddddd");

    const { Component, useState } = owl;
    const { xml } = owl.tags;



    console.log("welcome");




    class ComponentGeeks extends Component {
         static template = xml`
         <div class="bg-info text-center p-2">
         <b> Welcome to Odoo </b>
          <i class="fa fa-close p-1 float-right"
          style="cursor: pointer;"
          t-on-click="onRemove"> </i>
         </div>`


         onRemove(ev) {
         this.destroy();
         }
    }


    class ComponentsGeeks extends Component {

         constructor() {
            console.log('CALLED:> constructor');
            super(...arguments);
            this.messageList = [
                    'Hello World',
                     'Welcome to Odoo',
                     'Odoo is awesome',
                     'You are awesome too'
             ];
             this.state = useState({ currentIndex: 0 });
         }

         willPatch() {
            console.log('CALLED:> willPatch');
         }
         patched() {
            console.log('CALLED:> patched');
         }
         willUnmount() {
            console.log('CALLED:> willUnmount');
        }
         async willStart() {
             console.log('CALLED:> willStart');
         }
         mounted() {
            console.log('CALLED:> mounted');
         }


         static template = xml`
         <div class="bg-dark text-center p-2">
             <i class="fa fa-arrow-left p-1" style="cursor: pointer;" t-on-click="onPrevious"> </i>
             <b t-esc="messageList[Math.abs(state.currentIndex%4)]"/>
             <i class="fa fa-arrow-right p-1" style="cursor: pointer;" t-on-click="onNext"> </i>
             <i class="fa fa-close p-1 float-right" style="cursor: pointer;" t-on-click="onRemove"> </i>
         </div>`

         onNext(ev) {
            this.state.currentIndex++;
         }
         onPrevious(ev) {
            this.state.currentIndex--;
         }
         onRemove(ev) {
         this.destroy();
         }
    }

    owl.utils.whenReady().then(() => {
         const app = new ComponentGeeks();
         app.mount(document.body);
         const apps = new ComponentsGeeks();
         apps.mount(document.body);
     });

});



odoo.define('geeks.tour', function (require) {
"use strict";
    var core = require('web.core');
    var tour = require('web_tour.tour');
    var _t = core._t;
    console.log("tour test");

    tour.register('geeks_tour', {
         url: "/web",
         sequence: 111,
         rainbowManMessage: _t("Congrats, you have listed a geeks."),
         test: true,

    },[tour.stepUtils.showAppsMenuItem(),{
             trigger: '.o_app[data-menu-xmlid="geeks.menu_root_geeks_geeks"]',
             content: _t('Manage geeks and authors in <b>Geeks app</b>.'),
             edition: 'enterprise',
             position: 'right',
         },
         {
             trigger: '.o_list_button_add',
             content: _t("Let's create new book."),
             position: 'bottom',
         },
         {
             trigger: 'input[name="name"]',
             extra_trigger: '.o_form_editable',
             content: _t('Set the book title'),
             position: 'right',
         },
         {
             trigger: '.o_form_button_save',
             content: _t('Save this book record'),
             position: 'bottom',
         }
    ]);
});

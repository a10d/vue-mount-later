//import {createApp} from 'vue'
import {createApp} from 'vue/dist/vue.esm-bundler';
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

function mountVue(rootSelector) {

    // Template bzw. HTML vom mitgegebenen Element laden
    const template = document.querySelector(rootSelector)?.innerHTML;

    const app = createApp({
        template,
        components: {
            ComponentA,
            ComponentB,
        }
    })

    // app.use(pinia)

    app.mount(rootSelector)

    // App objekt zurückgeben mit überschriebener unmount mehtode.
    return {
        ...app,
        unmount() {
            app.unmount()

            // Originales html wiederherstellen
            document.querySelector(rootSelector).innerHTML = template;
        }
    };
}

//export {mountVue};

// mountVue über window global verfügbar machen
window.mountVue = mountVue;

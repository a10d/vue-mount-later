//import {createApp} from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler';
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

function mountVue(rootEl) {

    const app = createApp({
        template: rootEl.innerHTML,
        components: {
            ComponentA,
            ComponentB,
        }
    })

    app.mount(rootEl)

    // app.use(pinia)

    return app;
}

//export {mountVue};

// mountVue über window global verfügbar machen
window.mountVue = mountVue;

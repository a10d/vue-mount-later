//import {createApp} from 'vue'
import {createApp} from 'vue/dist/vue.esm-bundler';
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

/**
 *
 * @param root {string|HTMLElement}
 * @return {{
 *     unmount: () => void
 * }}
 */
function mountVue(root) {

    // Sicherstellen dass root element ein element ist
    // (Falls string übergeben, element anhand query selector holen)
    const rootElement = (typeof root === 'string')
        ? document.querySelector(root)
        : root;

    if (!rootElement) {
        throw new Error('Root element kann nicht gefunden werden.');
    }

    // Template bzw. HTML vom mitgegebenen Element laden
    const template = rootElement.innerHTML;

    const app = createApp({
        template,
        components: {
            ComponentA,
            ComponentB,
        }
    })

    // app.use(pinia)
    
    app.mount(rootElement)

    // App objekt zurückgeben mit überschriebener unmount mehtode.
    return {
        ...app,
        unmount() {
            // Unmount call an vue weitergeben
            app.unmount()

            // Hier ist die Vue app unmounted, sprich das root element (rootSelector) ist leer.

            // Originales html wiederherstellen
            rootElement.innerHTML = template;
        }
    };
}

//export {mountVue};

// mountVue über window global verfügbar machen
window.mountVue = mountVue;

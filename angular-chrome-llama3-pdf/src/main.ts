import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const ROOT_ELEMENT_TAG = 'app-root';
const ROOT_ELEMENT_ID = 'llama3-pdf'

let rootElement = document.querySelector(ROOT_ELEMENT_TAG);

if (!rootElement) {
    rootElement = document.createElement(ROOT_ELEMENT_TAG);
    rootElement.id = ROOT_ELEMENT_ID
    document.body.appendChild(document.createElement(ROOT_ELEMENT_TAG));
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
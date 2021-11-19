import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideFluentDesignSystem, allComponents } from '@fluentui/web-components';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
provideFluentDesignSystem().register(allComponents);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



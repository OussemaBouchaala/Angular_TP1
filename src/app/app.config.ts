import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      ToastrModule.forRoot({
        timeOut: 4000,
        positionClass: 'toast-top-right',
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing',
        newestOnTop: true,
        preventDuplicates: true,
        tapToDismiss: true,
        toastClass: 'ngx-toastr custom-toast'
      })
    )
  ]
};

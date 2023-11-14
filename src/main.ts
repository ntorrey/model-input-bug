import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { IonicModule } from '@ionic/angular';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   /* importProvidersFrom([
      IonicModule.forRoot({
        mode: 'md',
        animated: true,
        platform: {
          desktop: (win) => {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                win.navigator.userAgent
            )
            return !isMobile
          }
        }
      }),
    ]),*/
    provideIonicAngular({
      mode: 'md',
      animated: true,
      platform: {
        desktop: (win) => {
         const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
             win.navigator.userAgent
         )
         return !isMobile
        }
      }
    })
  ],
});

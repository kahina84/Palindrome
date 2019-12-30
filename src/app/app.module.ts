import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router,  NavigationEnd} from '@angular/router';
import { StartComponent } from './start/start.component';
import { PalindromeComponent } from './start/palindrome/palindrome.component';
import { StatsComponent } from './start/stats/stats.component';

export const appRoutes: Routes = [
  { path: 'start' , component: StartComponent},
  { path: 'start/palindrome', component: PalindromeComponent},
  { path: 'start/stats', component: StatsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PalindromeComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    HttpClientTestingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  navigationSubscription;
  constructor(private router: Router) {
    // souscrivez aux événements du routeur - mémorisant l'abonnement afin
    // de pouvoir nous désabonner ultérieurement.
    this.navigationSubscription = this.router.events.subscribe ((e: any) => {
      // // s'il s'agit d'un événement NavigationEnd, ré-initialisez le composant
         if (e instanceof NavigationEnd) {
        this.onInit();
      }
    });

}
onInit() {
}
 }

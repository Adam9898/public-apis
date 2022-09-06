import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AgifyNameAgeComponent} from "./agify-name-age/agify-name-age.component";
import {CryptoComponent} from "./crypto/crypto.component";
import {TvMazeComponent} from "./tv-maze/tv-maze.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agify', component: AgifyNameAgeComponent },
  { path: 'crypto', component: CryptoComponent },
  { path: 'tv-maze', component: TvMazeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

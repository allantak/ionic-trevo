import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistryComponent } from './pages/registry/registry.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registry', component: RegistryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

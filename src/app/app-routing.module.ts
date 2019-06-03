import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'registry', loadChildren: './juego/registry/registry.module#RegistryPageModule' },
  { path: 'route', loadChildren: './juego/route/route.module#RoutePageModule' },
  { path: 'question', loadChildren: './juego/question/question.module#QuestionPageModule' },
  { path: 'results', loadChildren: './juego/results/results.module#ResultsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ElectronicsComponent} from "./components/electronics/electronics.component";
import {JeweleryComponent} from "./components/jewelery/jewelery.component";
import {MenClothesComponent} from "./components/men-clothes/men-clothes.component";
import {WomenClothesComponent} from "./components/women-clothes/women-clothes.component";
import {CartModalComponent} from "./components/cart-modal/cart-modal.component";

const routes: Routes = [
  {path:'',redirectTo:'electronics',pathMatch:'full'},
  {path:'electronics',component:ElectronicsComponent},
  {path:'jewelery',component:JeweleryComponent},
  {path:'men-clothes',component:MenClothesComponent},
  {path:'women-clothes',component:WomenClothesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

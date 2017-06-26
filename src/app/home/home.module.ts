import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from "@angular/common";
import { TopLevelCommunityListComponent } from "./top-level-community-list/top-level-community-list.component";
import { HomeNewsComponent } from "./home-news/home-news.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../shared/shared.module";
import { FeaturedCollectionComponent } from "./featured-collection/featured-collection.component";
import { EditFeaturedCollectionComponent } from "./edit-featured-collection/edit-featured-collection.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    HomeComponent,
    TopLevelCommunityListComponent,
    HomeNewsComponent,
    FeaturedCollectionComponent,
    EditFeaturedCollectionComponent
  ]
})
export class HomeModule { }

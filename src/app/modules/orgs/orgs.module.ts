import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { EntitiesComponent } from "./components/entities/entities.component";
import { EntityDetailComponent } from "./components/entity-detail/entity-detail.component";
import { SuppliersApiService } from "./services/suppliers.api.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/pipes/filter.pipe";
import { CrudFormComponent } from "./components/entity-detail/crud-form.component";
import { SearchComponent } from "./components/search/search.component";
import { AttributesService } from "./services/attributes.service";
import { OrgrsComponent } from "./components/orgs/orgs.component";
import { SearchService } from "./services/search.service";

const routes: Routes = [
  { path: "", component: OrgrsComponent },
  { path: ":id", component: EntityDetailComponent }
];
@NgModule({
  declarations: [
    EntitiesComponent,
    EntityDetailComponent,
    CrudFormComponent,
    FilterPipe,
    SearchComponent,
    OrgrsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [SuppliersApiService, AttributesService, SearchService]
})
export class OrgsModule {}

import { Component, OnInit } from "@angular/core";
import { Supplier } from "../../interfaces/supplier.resource";

@Component({
  selector: "app-orgs",
  templateUrl: "./orgs.component.html",
  styleUrls: ["./orgs.component.css"],
})
export class OrgrsComponent {
  suppliers: Supplier[];
  searchText: String;
  constructor() {}
}

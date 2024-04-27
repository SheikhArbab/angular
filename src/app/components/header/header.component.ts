import { Component, OnInit } from '@angular/core';
import { NavLinks } from 'src/types/navLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks: NavLinks[] = [
    {
      name: "home",
      url: ""
    },
    {
      name: "products",
      url: "/products"
    },
    {
      name: "subject",
      url: "/subject"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

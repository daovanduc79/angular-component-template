import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  searchKeyup(event){
    const keywords = event.target.value;
    console.log(keywords);
    this.searchService.searchInput.next(keywords);
  }

  ngOnInit(): void {
  }

}

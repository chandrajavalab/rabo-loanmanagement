import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {SearchService} from '../service/search.service';
import {SearchResult} from "../model/Search.model";
import { Subscription, Subject }      from 'rxjs';
import { User } from '../model/User.model';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  resultList:Array<SearchResult>;

  constructor(private searchService:SearchService,private router: Router) { }

  ngOnInit(): void {
  }

  
msg:User;
  onSubmit(form :NgForm){
    var dataService = new DataService();

    
      this.resultList = this.searchService.searchLoanDetail(form.value.searchData.firstName,
      form.value.searchData.lastName,form.value.searchData.loanNumber);
  }

  onEdit(loanNumber:Number){
    
    this.router.navigate(['/updateloan'], { queryParams: { loanNumber: loanNumber } });


  }

}

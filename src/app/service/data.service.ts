import { Injectable } from '@angular/core';
import { CustomerDetails } from '../model/CustomerDetails.model';
import { LoanDetails } from '../model/LoanDetails.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static instance: DataService;
  userName:String;
  loan :Array<CustomerDetails> = new Array();
  loanDetailsAry :Array<LoanDetails> = new Array();  
  


  constructor() {
    return DataService.instance = DataService.instance || this;
  }

  setInitialCustomerDetailData(){
    var customerDetails = new CustomerDetails();
    customerDetails.firstName = 'Chandra';
    customerDetails.lastName = 'Mohan';
    customerDetails.loanNumber = 12233;
    customerDetails.address1 = 'Chennai';
    customerDetails.address2 = 'Chennai';
    customerDetails.city = 'chennai';
    customerDetails.amount = 10000;
    this.loan.push(customerDetails);

    customerDetails = new CustomerDetails();
    customerDetails.firstName = 'Ram';
    customerDetails.lastName = 'Mohan';
    customerDetails.loanNumber = 12234;
    customerDetails.address1 = 'Chennai';
    customerDetails.address2 = 'Chennai';
    customerDetails.city = 'Chennai';
    customerDetails.amount = 20000;
    this.loan.push(customerDetails);
  }

  setCustomerLoan(){
    var loanDetails = new LoanDetails();
    loanDetails.loanNumber = 12233;
    loanDetails.loanTerm = 24;
    loanDetails.loanType = 'Home Loan';

    this.loanDetailsAry.push(loanDetails);


    loanDetails = new LoanDetails();
    loanDetails.loanNumber = 12234;
    loanDetails.loanTerm = 24;
    loanDetails.loanType = 'Personal Loan';
    this.loanDetailsAry.push(loanDetails);

  }
  
}

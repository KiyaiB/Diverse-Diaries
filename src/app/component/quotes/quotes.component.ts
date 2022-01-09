import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[

    new Quotes( " The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education." ,"Martin Luther King, Jr. ", "Brainy Quotes Publisher", 0 , 0 , new Date ( 2010, 3, 12) ),
    new Quotes( " The only thing worse than being blind is having sight but no vision." , "Helen Keller.", "Brainy Quote Publisher", 0 , 0 , new Date ( 2002, 7 , 12) ),

  ]


  
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }

    }
    
  

  }
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.published = new Date(quote.published)
    this.quotes.push(quote)
  }

  currentValue:number;
  newValue:number;
  counter:number;
  highestVotes(){
    this.currentValue = 0
    this.newValue = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.newValue = this.quotes[this.counter].upvote;
      if(this.newValue > this.currentValue){this.currentValue = this.newValue}
    }
    return  this.currentValue
  }


  constructor() { }

  ngOnInit(): void {
  }

}

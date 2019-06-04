import { Component, OnInit,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes = [
      new Quote("Don't cry because it's over, smile because it happened","Dr. Seuss","John Muasa",new Date(2019,2,20),0,0),
      new Quote("Be yourself; everyone else is already taken.","Oscar Wilde","John Muasa",new Date(2019,2,16),0,0),
      new  Quote("So many books, so little time","Frank Zappa","John Muasa",new Date(2019,2,21),0,0),
      ]

    showDetails(index){
      this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
    }

  

    addNewQuote(quote){
      let quotelength = this.quotes.length;
      quote.id= quotelength+1;
      quote.publishDate = new Date(quote.publishDate)
      this.quotes.push(quote)
    }

      quotePlus(isPlus,index){
        if(isPlus){
          this.quotes[index].upVote +=1;
        }
      }

      quoteMinus(isMinus,index){
        if(isMinus){
          this.quotes[index].downVote +=1;
        }
      }

    deleteQuote(isComplete,index){
      if(isComplete){
        let toDelete = confirm('Are you sure you want to delete this Quote?')

        if(toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

  constructor() { }

  ngOnInit() {
  }

}
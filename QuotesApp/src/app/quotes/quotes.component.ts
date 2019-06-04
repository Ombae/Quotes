import { Component, OnInit,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes = [
      new Quote("As you grow older more people you know start to die.","Biko Zulu","Seth Ombae",new Date(2019,6,4),0,0),
      new Quote("Your kids do not have to like your pants","Calvince Omonge","Seth Ombae",new Date(2019,6,4),0,0),
      new  Quote("God is great, whisky is good and people arecrazy!","Hamida Mustafa","Seth Ombae",new Date(2019,6,3),0,0),
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

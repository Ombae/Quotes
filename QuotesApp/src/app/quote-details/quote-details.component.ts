import { Component, OnInit, Input,EventEmitter,Output
} from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>()
  @Output() isPlus = new EventEmitter<boolean>();
  @Output() isMinus= new EventEmitter<boolean>();


  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
 
  quotePlus(plus:boolean){
    this.isPlus.emit(plus);
  }

  quoteMinus(minus:boolean){
    this.isMinus.emit(minus);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
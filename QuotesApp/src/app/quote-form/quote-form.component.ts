import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'
import *  as $ from 'jquery';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})

export class QuoteFormComponent implements OnInit {
  newQuote = new Quote ("","","",new Date(),0,0);
  constructor() { }

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote)
  }

  ngOnInit() {
    $(document).ready(function(){
      $(".box").fadeIn(2000)
    })
  }

}

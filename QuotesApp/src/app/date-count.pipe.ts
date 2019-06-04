import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithoutTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference = Math.abs(todayWithoutTime-value)//returns time taken since the quote was created in milliseconds
    console.log(dateDifference);
    const secondsInADay = 86400;
    var dateDifferenceInSeconds = dateDifference*0.001;//converts milliseconds to seconds
     var dateTimer = dateDifferenceInSeconds/secondsInADay;

     if (dateTimer >=1 && value<todayWithoutTime){
       return dateTimer;
     }
     else{
       return 0;
     }

  }

 

}

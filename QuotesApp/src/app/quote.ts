export class Quote {

    public showPublisher:boolean;
    constructor(public quote:string, public author:string, public publisher:string,
       public publishDate:Date, public upVote: number = 0,public downVote: number = 0){
        this.showPublisher=false

    }
}

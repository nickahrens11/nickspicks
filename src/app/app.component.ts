import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

//import  *  as  data  from  './assets/games.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];

  ngOnInit () {
    //console.log(data);

    //this.httpService.get('./assets/games.json').subscribe(
      //data => {
        //this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      //},
      //(err: HttpErrorResponse) => {
        //console.log (err.message);
      //}
   // );
  }
}

import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, query, limitToLast } from "firebase/database";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  quote

  constructor() { }

  ngOnInit() {
    // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);


    // Initialize Realtime Database and get a reference to the service
    const database = getDatabase(app);
    const quotesRef = ref(database, 'quotes');

    const lastQuote = query(quotesRef,limitToLast(1));
    //console.log(lastQuote.)

    onValue(lastQuote, (snapshot) => {
      const data = snapshot.val();
      this.quote = data
      console.log(this.quote)
    });

    


  }



}

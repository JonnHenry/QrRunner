import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,private statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('#5E5F60');
  }
  startGame(){
    this.router.navigate(['registry']);
  }

}

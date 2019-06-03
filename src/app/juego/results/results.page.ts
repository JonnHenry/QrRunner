import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {


  public answersOfTeam;
  public rows=[];
  public loaded:boolean;
  public score:number=0;

  constructor(private screenshot: Screenshot, private storage: Storage,private router: Router,public alertController: AlertController) { }


  ngOnInit() {
    var i:number;
    this.score=0;
    this.loaded=false;
    this.scoreTeam().then(score=>{
      this.score=score;
      this.loaded=true;
    });
  }

  endGame(){
    this.screenshot.save('jpg', 80, 'result.jpg').then(()=>
    {
      this.presentAlert('Juego finalizado','Screenshot','La imagen que contiene la información del puntaje se ha finalizado con exito!')
      this.router.navigateByUrl('/home');
    },
    ()=>{
      this.presentAlert('Error','Screenshot','La imagen que contiene la información del puntaje no se ha guardado vuelva a finalizar el juego!')
    });
    
  }


  async presentAlert(header,subtitulo,message) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subtitulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  async scoreTeam() {
    var score=0;
    var i=0;
    for(i = 0;i<=7;i++) {
        this.storage.get('answersTeam'+"'"+i+"'").then((val) => {
          this.rows[i]=JSON.parse(val);
          score=this.rows[i].scoreAnswer+score;
        })
        await this.delay(500, i);
    }
    
    return score;

  }

  delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => {
      resolve(count);
    }, milliseconds);
  });
}

}

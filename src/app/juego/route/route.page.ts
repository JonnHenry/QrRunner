import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Order } from 'src/app/Model/Order';
import { PlacesOfGame } from 'src/app/Model/facultades';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})
export class RoutePage implements OnInit {

  counter:number;
  private dataTeam;
  orderTeam: Order;
  numTeam: number;
  placesOfGame: PlacesOfGame;
  public cargado:boolean=false;
  public placeTeam;
  private flowGame;

  constructor(public alertController: AlertController,private toastController: ToastController,private storage: Storage,private barcodeScanner: BarcodeScanner,private router: Router) {
    this.orderTeam=new Order();
    this.placesOfGame=new PlacesOfGame();
  }

  ngOnInit() {
    this.storage.get('dataTeam').then((val) => {
      this.dataTeam= JSON.parse(val);
      this.numTeam = this.dataTeam.numberOfTeam;
    });

    this.storage.get('counter').then((value)=>{
      this.counter=value;
      this.flowGame=this.orderTeam.getGameFlow(this.numTeam).gameFlow;
      this.placeTeam=this.placesOfGame.getPlacesOfGame(this.flowGame[this.counter]);
      this.cargado=true;
    })
  }

  scanTheCode(){
    this.barcodeScanner.scan({
      resultDisplayDuration: 1, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : "QR_CODE,PDF_417",
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
    }).then(barcodeData => {
      var datos=barcodeData.text.split(',');
      if((parseInt(datos[0],10)==this.orderTeam.getGameFlow(this.numTeam).gameFlow[this.counter])&&(parseInt(datos[1])==this.numTeam)) {
        this.router.navigate(['question']);
      }else{
        this.presentAlert('Error','QR incorrecto','El código que se escaneo no pertenece al grupo, por favor vuelva a escanear el código QR.')
        this.router.navigateByUrl('/route');
      }
     }).catch(err => {
         this.presentToast('Ha ocurrido un error inesperado por favor vuelva a intentarlo!');
     });

  }

  async presentToast(mensage) {
    const toast = await this.toastController.create({
      message: mensage,
      duration: 3000
    });
    toast.present();
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


  ionViewWillEnter(){
    this.storage.get('dataTeam').then((val) => {
      this.dataTeam= JSON.parse(val);
      this.numTeam = this.dataTeam.numberOfTeam;
    });

    this.storage.get('counter').then((value)=>{
      this.counter=value;
      this.flowGame=this.orderTeam.getGameFlow(this.numTeam).gameFlow;
      this.placeTeam=this.placesOfGame.getPlacesOfGame(this.flowGame[this.counter]);
      this.cargado=true;
    })
  }

}

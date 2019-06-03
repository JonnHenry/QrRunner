import { Component, OnInit } from '@angular/core';
import { Team } from '../../Model/Team';
import { ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {

  public name:string='';
  public password:string;
  private team: Team;
  private counter:number=0;
  
  
  constructor(public alertController: AlertController,private toastController: ToastController,private router: Router,private storage: Storage) { 
  }

  ngOnInit() {
    this.storage.clear().then(() => {
      this.presentAlert('Eliminación','Datos eliminados','Los datos guardados han sido eliminados!');
    });
  }

  registryTeam(form){
    //DataTime contiene el nombre del equipo y su numero de equipo
    if ((this.password.indexOf("cms")!=-1)){
      this.team=new Team(this.name,this.password);
      this.storage.set('dataTeam', JSON.stringify({
        "name": this.team.getNameOfTeam(),
        "password": this.team.getPasswordOfTeam(),
        "numberOfTeam": this.team.knownNumberOfTeam()
      }));
      this.presentAlert('Bienvenido','El juego acaba de iniciar','Te damos una cordial bienvenida al juego esperamos que lo disfrutes mucho, ¡Suerte!');
      this.storage.set('counter',this.counter=0);
      form.reset();
      this.router.navigateByUrl('/route');
    } else {
      this.presentToast('Error al ingresar la contraseña!')
    }
    
  }

  async presentToast(mensage) {
    const toast = await this.toastController.create({
      message: mensage,
      duration: 3000
    });
    toast.present();
  }

  return(formRegistry){
    formRegistry.reset();
    this.router.navigate(['home']);
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

}

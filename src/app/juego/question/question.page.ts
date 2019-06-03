import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Model/Order';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Questions } from 'src/app/Model/Questions';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  public counter:number;
  public dataTeam;
  orderTeam: Order;
  numTeam: number;
  questionsData: Questions;
  public questionTeam;
  public optionsTeam;
  private correctAnswer;
  private answerTeamOfTheQuestion;
  public completeLoad: boolean;
  private gameFlowNumber;
  public numberOfQuestion;
  public datosFinales;


  constructor(private storage: Storage,private router: Router,public alertController: AlertController,private toastController: ToastController) { 
    
  }

  ngOnInit() {
    this.questionsData=new Questions();
    this.orderTeam=new Order();
    this.completeLoad=false;
    this.storage.get('dataTeam').then((val) => {
      this.dataTeam=JSON.parse(val);
    });

    this.storage.get('counter').then((value)=>{
        this.counter=value
        this.numTeam = this.dataTeam.numberOfTeam;
        this.gameFlowNumber=this.orderTeam.getGameFlow(this.numTeam).gameFlow
        this.questionTeam=this.questionsData.getAnQuestion(this.gameFlowNumber[this.counter]);
        this.optionsTeam=this.questionsData.getOptionsOfQuestions(this.gameFlowNumber[this.counter]);
        this.correctAnswer=this.questionsData.getAnswerOfQuestions(this.gameFlowNumber[this.counter]);
        this.completeLoad=true;
        this.numberOfQuestion=this.counter+1;
      })
  }


  nextPlace(){
    
    var puntaje=0;
    if(this.answerTeamOfTheQuestion!=null){
      if (this.answerTeamOfTheQuestion==this.correctAnswer) {
        puntaje=1;
      }else {
        puntaje=-1;
      }
    }else {
      this.presentAlert('Error','Faltan Datos','No se ha ingresado una respuesta por lo que se ha penalizado como una falla');
      puntaje=-1;
    } 
    
    var dato={
      "question": this.questionTeam,
      "answerTeam": this.answerTeamOfTheQuestion,
      "scoreAnswer": puntaje
    }
    this.storage.set('answersTeam'+"'"+this.counter+"'", JSON.stringify(dato));
    this.counter++;
    this.storage.set('counter',this.counter);
    this.router.navigate(['route']);
  }

  checkValue(event){
    this.answerTeamOfTheQuestion=event.detail.value;
  }

  finishTheGame(){
    var puntaje=0;
    if(this.answerTeamOfTheQuestion!=null){
      if (this.questionTeam==this.correctAnswer) {
        puntaje=1;
      }else {
        puntaje=-1;
      }
    }else {
      this.presentAlert('Error','Faltan Datos','No se ha ingresado una respuesta por lo que se ha penalizado como una falla');
      puntaje=-1;
    } 
    
    var dato={
      "question": this.questionTeam,
      "answerTeam": this.answerTeamOfTheQuestion,
      "scoreAnswer": puntaje
    }
    this.storage.set('answersTeam'+"'"+this.counter+"'", JSON.stringify(dato));
    this.router.navigate(['results']);
  }

  printValue(){
    
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

}

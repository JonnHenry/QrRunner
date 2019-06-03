export class Team{
    data = {
        name: '',
        password: ''
    }

    constructor(name:string, password:string){
        this.data.name=name;
        this.data.password=password;
    }

    knownNumberOfTeam(){
        var splitChar=this.data.password.split(';')
        return parseInt(splitChar[1]);
    }

    setName(newName:string){
        this.data.name=newName;
    }

    setPassword(newPassword){
        this.data.password=newPassword;
    }

    getNameOfTeam(){
        return this.data.name;
    }

    getPasswordOfTeam(){
        return this.data.password;
    }

    getData() {
        return this.data;
    }

    setData(newData){
        this.data=newData;
    }
}
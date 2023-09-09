export class AuthService{
    logged:boolean=false;
    login(){
        this.logged=true;
    }
    logout(){
        this.logged=false;
    }
    isLogged(){
        return this.logged;
    }
}
class Users{
    
 constructor(name, email,phone,dob,country,creationDate,loginDate){
     this.name=name;
     this.email=email;
     this.phone=phone;
     this.dob=dob;
     this.country=country;
     this.creationDate=creationDate;
     this.loginDate=loginDate;
 }
  getName(){
      return this.name;
  }
  getEmail(){
      return this.email;
  }
  getPhone(){
      return this.phone;
  }
  getDob(){
      return this.dob;
  }
  getCountry(){
      return this.country;
  }
  getCreationDate(){
      return this.creationDate;
  }
  getLoginDate(){
      return this.loginDate;
  }
}
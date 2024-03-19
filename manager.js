


document.getElementById("login-btn").addEventListener("click", function() {
    // Add login functionality
    console.log("Login button clicked");

    // Redirect to dashboard.html
    window.location.href = "dashboard.html";
});




function Manager (){
return {
employeeList : [] ,
createEmployee : createEmployee,
hireEmployee : addemployee,
fireEmployee : fireEmployee, 
searchEmployee : searchForEmployee,
displayEmployee : displayEmployee,
rateEmployee : rateEmployee

}

}





const createEmployee = function(firstName , lastName , age , department , email ){

return {

firstName : firstName,
lastName : lastName,
age : age,
department : department,
email : email ,
rating : 0,
id : generateId()
}

}





const hireEmployee = function (object){

employeeList.push(object)

}



const fireEmployee = function (id){

for (var i = 0 ; i < this.employeeList.length ; i++ ){

   if (this.employeeList[i].id === id){this.employeeList[i].splice(i,1) ; break}
}
    

}



const rateEmployee = function (value , id ){

for (var i = 0 ; i < this.employeeList.length ; i ++ ){

    if (this.employeeList[i].id === id ){

        this.employeeList[i].rating === value
    }
}

}


const generateId = function () {
    var count = 1;
    return function () {
      var t = count;
      count = count + 1;
      return t;
    };
  }




  const searchByCrit = function (crit){
    var arr = []
    for (var i = 0 ; i < this.employeeList.length ; i ++ ){

        
        if (this.employeeList[i].name === crit )
    }



  } 
    
            
            
       
  

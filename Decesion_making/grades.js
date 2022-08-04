
const findGrades = (a) => {
  
    let GRADE;
    if (a<= 10){
    return 'E';
    }
    
    else if (a>=11 && a<=20){
      GRADE="D";
    }
    else if (a>=21 && a<=30){
     GRADE="C";
    }
     else if (a>=31 && a<=40){
      GRADE="B";
    }
     else if (a>=41 && a<=50){
    GRADE="A";
    }
    else{
      GRADE="invalid marks"
    }
    return GRADE;
  
};

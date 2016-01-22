var operator;

$(window).load(function(){
     
     
     var num1, num2, result;     
    
     setDefaults();  
     
     function setDefaults(){
         
         num1=null;
         num2=null;
         result=null;
         operator = "nothing";
        
     }
    
     function reset(){
         
         $("#screen").text("");
         $("#subScreen").text("");
         num1 = 0;
         num2 = 0;
         result = 0;
         operator = "nothing";
    }
    
     function clearScreen(){
         $("#screen").text("");
         $("#subScreen").text("");
                 
     }
    
     $(".number").click(function(){
                  
         $("#screen").text($("#screen").text()+$(this).text());
         
     });
     
     $("#clear").click(function(){
         
       reset();
         
     });
     
     $("#erase").click(function(){
         
        var s = $("#screen").text();
         
        s = s.slice(0,s.length-1);
        $("#screen").text(s);
       
     });
        
     $("#negative").click(function(){         
        
        var s = $("#screen").text();
        
        if(s.length>0){
            
            var newText = "-" + s; 
            $("#screen").text(newText);

        }
        
     });    
    
     $(".operator").click(function(){
          
         var s = $("#screen").text();
         if(s.length > 0){
             
             if(operator === "nothing"){
             
             //if operator is not pressed yet
             num1 = parseFloat(s);
             result = num1;
             
             
             }

             else{

                 // if an operator has already been pressed
                 num2 = parseFloat(s);             
                 calculate(num1, num2, operator);
                 num1 = result; // after calculating the result , set num1 to result

             }

             operator = $(this).text();
             clearScreen();
             $("#subScreen").text(result + " " + operator);
             
             }

     });
     
     $("#equals").click(function(){
          
         num2 = parseFloat($("#screen").text()); 
         
         calculate(num1, num2, operator);

         $("#screen").text(result);
         $("#subScreen").text(num1 + " " + operator + " " + num2 + " = " + result);
         operator = "nothing"; // clear operator after calculating
       
         
     });
    
     function calculate(n1, n2, oper){
        
         switch(operator){
                     
                 case '+':
                     result += num2;
                     break;
                     
                 case '-':
                     result -= num2;
                     break;
                     
                case 'X':
                     result *= num2;
                     break;
                     
                case '/':
                     result /= num2;
                     break;     
                                          
             }
        
    }



});

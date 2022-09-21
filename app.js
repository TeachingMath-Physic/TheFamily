
var i=0, j=0;

function mifuncprevious(){
    if(j===0){
        document.getElementById("foto").src = "images/6.jpeg"
        j++;
    }
    else{
        if(j===1){
            document.getElementById("foto").src = "images/5.jpeg"
            j=2;
        }

        else{
            if(j==2){
                document.getElementById("foto").src = "images/4.jpeg"
                j=3;
            }

            else{
                if(j==3){
                    document.getElementById("foto").src = "images/3.jpeg"
                    j=4;

                }

                else{
                    if(j==4){
                        document.getElementById("foto").src = "images/2.jpeg"
                        j=5;
                    }
                    
                    else{
                        document.getElementById("foto").src = "images/1.jpeg"
                        j=0;

                    }

                }
            }


        }

    }

}

function mifuncnext(){
    if(i===0){
        document.getElementById("foto").src = "images/2.jpeg"
        i++;
    }
    else{
        if(i===1){
            document.getElementById("foto").src = "images/3.jpeg"
            i=2;
        }

        else{
            if(i==2){
                document.getElementById("foto").src = "images/4.jpeg"
                i=3;
            }

            else{
                if(i==3){
                    document.getElementById("foto").src = "images/5.jpeg"
                    i=4;

                }

                else{
                    if(i==4){
                        document.getElementById("foto").src = "images/6.jpeg"
                        i=5;
                    }
                    
                    else{
                        document.getElementById("foto").src = "images/1.jpeg"
                        i=0;

                    }

                }
            }


        }

    }

}



/*

var set = setInterval(a, 2000);
var i=0;

function a(){
    i++;
    if(i===6){
        clearInterval(set);
        document.write("Proceso terminado");
    }
    else{
        document.write("Probando: " + i + "<br/>");
    }

}


function mifuncion(){
    for (i=1; i<11; i++){
        document.write("El numero es: " + i + "<br/>");
        document.getElementById("texto").innerHTML = "UHMMM " + i;
    }

}

function mifuncion1(){
    for(i=11; i<21; i++){
        document.write("El numero es: " + i + "<br/>");
    }

}
*/
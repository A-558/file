console.log('js started');

var password ='';
var repassword = '';

function SU(){
    password = document.getElementById('pswd').value;
    repassword = document.getElementById('pw').value;

   

    if( password=='12345'){
        document.getElementById('result').innerHTML = 'sussesfully singned up'
        document.getElementById('result').style.color = ' green';
        console.log('sucessfully signed up');
    }
    else if(  repassword!= '12345'){
        document.getElementById('result').innerHTML = 'plz check the repassword';
        document.getElementById('result').style.color = 'red';

    }
    else{
        console.log('Just try 2233445566 AS your password');
        document.getElementById('result').innerHTML = 'Just try 2233445566 AS your password';
        document.getElementById('result').style.color = 'red';
    }
    return false;
}

console.log('js ended')
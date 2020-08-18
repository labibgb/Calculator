$(document).ready(function(){
    let display = $("#cal-display");
    display.css({
        "background-color": "white",
        "height": "50px",
        "font-size": "2em"
    });
    let key = $(".container");
    key.keypress(function(val){
        let v = String.fromCharCode(val.keyCode);
        console.log(v);
        if(val.which === 13 ) v = '=';
        if(val.which === 127 ) v = 'DEL';
        if(val.which === 8 ){
            console.log("backspace");
        }
        if( v == '+' || v == '-' || v == '*' || v == '/' || v == '=' || v == '.' || v == 'DEL' || v == '(' || v == ')' || ( v >= '0' && v <= '9' ) )
        {
            console.log(v);
            if( v >= '0' && v <= '9' ){
                 sendVal( v-'0');
            }
            else{
                sendVal(v);
            }
        }
    });
    let click = $(".custom");
    click.click(function(v){
        let val = $(this).val();
        sendVal(val);

        this.blur(500);
    });
});
let flag = 0;
let deg = 1;
let lastRes = 0;
let res = 0;
let p = 0;
if( deg === 1 ){
    
    document.getElementById("deg").disabled = true;
    document.getElementById("rad").disabled = false;
}
else{
    document.getElementById("deg").disabled = false;
    document.getElementById("rad").disabled = true;
}

function sendVal(num){
    let id = "#cal-display"
    console.log(num)
    try{
        if( num == 'rad' )
        {
            deg = 0;
            document.getElementById("deg").disabled = false;
            document.getElementById("rad").disabled = true;
            return;
        }
        if( num == 'deg'){
            deg = 1;
            document.getElementById("deg").disabled = true;
            document.getElementById("rad").disabled = false;
            return;
        }
        if( num == 'DEL')
        {
            $(id).val("");
        }
        else if( num === 'CE' ){
            $(id).val($(id).val().slice(0,-1));
        }
        else if( num == "sqrt"){

            let ans = eval($(id).val());
            ans = Math.sqrt(ans)
            showData(ans);
        }
        else if( num == "n!" ){
            let res = 1;
            let data = eval($(id).val());
            for( let i = 1 ; i <= data; i++ ){
                res *= i;
            }
            showData(res);

        }
        else if( num == 'Ans'){
            $(id).val($(id).val()+lastRes);
            flag = 0;
        }
        else if( num == "pwr" ){
            p = 1;
            $(id).val($(id).val()+"^");
        }
        else if( num == 'sin')
        {
            
        }
        else if( num == 'cos')
        {
            
        }
        else if( num == 'sin')
        {
            
        }
        else if( num == 'tan')
        {
            
        }
        else if( num == 'ln')
        {
            
        }
        else if( num == 'log')
        {
            
        }
        else{
            if( num == '=')
            {
                if( p === 1 ){
                    let s = $(id).val();
                    s = s.split("^");
                    p = 0;
                    lastRes = Math.pow(parseInt(s[0]), parseInt(s[1]));
                    showData(lastRes);
                }
                else{
                    flag = 1;
                    lastRes = eval($(id).val());
                    showData(lastRes);
                }
            }
            else{
                if( flag === 1 ) $(id).val("");
                flag = 0;
                $(id).val($(id).val()+num);
            }
        }
    }
    catch(e){
        showData(e.message);
    }
    
}
function showData(data){
    let id = "#cal-display"
    lastRes = data;
    $(id).val(data);
    flag = 1;
}

function calculate(){

}
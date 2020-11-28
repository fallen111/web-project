
function formvalidation() {
    var name = document.getElementsByName("uiname")[0].value;
    var familyname = document.getElementsByName("uifname")[0].value;
    var english=document.getElementsByName("uienglish")[0].value;
    var phone = document.getElementsByName("uiphone")[0].value;
    var email = document.getElementsByName("uiemail")[0].value;
    var ID = document.getElementsByName("uiID")[0].value;
    var password = document.getElementsByName("uipassword")[0].value;
    var confirm = document.getElementsByName("uiconfirm")[0].value;
    var address = document.getElementsByName("uiaddress")[0].value;
    var birthday= document.getElementsByName("uibirth day")[0].value;
    var mstatus = null;
    for (var i = 0; i < document.getElementsByName("uimstatus").length; i++) {
        if (document.getElementsByName("uimstatus")[i].checked) {
            mstatus = document.getElementsByName("uimstatus")[i].value;
        }
    }
    var g= document.getElementsByName("uigender")[0];
    var gender=g.options[g.selectedindex].value;

    var interest = null;
    for (var i = 0; i < document.getElementsByName("interest").length; i++) {
        if (document.getElementsByName("interest")[i].checked) {
            interest[i]= document.getElementsByName("interest")[i].value;
        }
    }

    var emessage = "";

    if (name.length > 50 || name.length < 3||name.test(/[\u0750-\u077F]/)==false){
        emessage+="invalid name entry.please re enter</br>";}

    if (gender==-1){
        emessage+="_please choose gender</br>";}

    if(familyname.length>100||familyname.length<3||familyname .test(/[\u0750-\u077F]/)==false){
        emessage+="invalid family name entry.please re enter</br>";}

    if(english.length>150||english.test( /^[a-zA-Z]+$/)==false){
        emessage+="invalid name and family name in english.please re enter</br>";}

    if(email=""||(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email)==false){
        emessage+="invalid email address.please re enter</br>";}

    if(phone=""||phone.startsWith("09")==false||phone.test(/[0-9]/g)==false){
        emessage+="invalid phone number please reenter</br>";}

    if(ID.length!=10||ID.test(/[0-9]/g)==false){
        emessage+="invalid ID.please re enter</br>";}

    if(password=""||password.length>24||password.length<8||
        (/^[a-zA-Z0-9!#$*+/=-]*/).test(password)==false){
        emessage+="invalid password.password should contain uppercase or lowercase english letters , numbers and !#$*+/=- characters</br>";}

    if(confirm!=password||confirm=""){
        emessage+="incorrect.please re enter</br>";}

    if(address.length>250||address.test(/[\u0750-\u077F]/)==false){
        emessage+="invalid address.must be less than 250 chracters</br>";}

    if(birthday=""|| ((13[1-9]{1}[0-9]{1})/(0[1-9]|1[0-2])/(0[1-9]|[12]\d|3[01])).test(birthday)==false){
        emessage+="invalid birthday.please re enter</br>";}


    
    document.getElementById("uimessage").innerHTML = emessage;
}
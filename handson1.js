//String to Array of Words

string_to_array=function(str){
    //return str.trim().split(" ");
    let len1 = str.length-1;
    let i=0;
    let str3=[];
    for(i;i<=len1;i++){
        let str2=str.charAt(i);
        //console.log(str2);
        if(str2.match(" ")||str2.match(null)){
        }else{
        console.log(str2);
        str3.push(str2);
        }
    }
    console.log(str3);
}

string_to_array("Rohith Daddy");
function interchange_string(){

    let input = ["1","2","3","4"];
    let inputlen = input.length,storage1;

    for(let i=0;i<=inputlen-1;i++){
        if(i==0){
            console.log(input[i])
        }
        if(i>=1){
            if(i%2!=0){
                storage1 = input[i];
                input[i] = input[3];
                input[3]=storage1;

                console.log(input[i]);
            }else{
                console.log(input[i]);
            }
        }
    }
}


interchange_string();
palindrome_prog_usingArr = function (str) {

    let strlen = str.length, str2 = [];

    for (i = strlen - 1; i >= 0; i--) {
        console.log(str.charAt(i));

        str2.push(str.charAt(i));
    }

    console.log(str2);
    let str3 = str2.toString().replaceAll(",","");

    if (str == str3) {
        console.log("It's palindrome")
    } else {
        console.log("It's not plaindrome")
    }


}

palindrome_prog_usingArr("madam");


palindrome_prog_usingArr2 = function (str) {

    let strlen = str.length, str2 = [];

    for (i=0;i<=strlen-1;i++) {
        console.log(str.charAt(i));

        str2.unshift(str.charAt(i));
    }

    let str3=" ";
    console.log(str2);
    str3=str2.toString().replaceAll(",","");

    if (str == str3) {
        console.log("It's palindrome")
    } else {
        console.log("It's not plaindrome")
    }

}

palindrome_prog_usingArr2("sir");



palindrome_prog_usingStr = function (str) {

    let strlen = str.length, str2 = [];

    for (i = strlen - 1; i >= 0; i--) {
        console.log(str.charAt(i));

        str2= str2+str.charAt(i);
    }

    if (str == str2) {
        console.log("It's palindrome")
    } else {
        console.log("It's not plaindrome")
    }

}

palindrome_prog_usingStr("ror");
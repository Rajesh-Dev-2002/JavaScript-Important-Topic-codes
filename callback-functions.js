function abc(friend,name){
    console.log("Hii My function name is "+ friend)
    name();
}

function name() {
    console.log("My Name is Peter Parker");
    
}

abc('Peter parker',name);

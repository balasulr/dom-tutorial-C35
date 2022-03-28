
const minus = () => {
    let fredCtrl = document.getElementById("fred");
    let val = fredCtrl.value;
    val = Number(val);
    val--;
    fredCtrl.value = val;
    if(val % 2 == 0) {
        fredCtrl.style.color = "red";
    } else {
        fredCtrl.style.color = "black";
    }
    if(val % 3 == 0) {
        fredCtrl.style.fontWeight = "bold";
    } else {
        fredCtrl.style.fontWeight = "normal";
    }
}

const plus = () => {
    let fredCtrl = document.getElementById("fred");
    let val = fredCtrl.value;
    val = Number(val);
    val++;
    fredCtrl.value = val;
    if(val % 2 == 1) {
        fredCtrl.style.color = "black";
    } else {
        fredCtrl.style.color = "red";
    }
    if(val % 3 == 0) {
        fredCtrl.style.fontWeight = "bold";
    } else {
        fredCtrl.style.fontWeight = "normal";
    }
}

const change = (chg) => {
    let fredCtrl = document.getElementById("fred");
    let val = fredCtrl.value;
    val = Number(val);
    val = val + chg;
    fredCtrl.value = val;
    display(val, fredCtrl);
}
const display = (nbr, ctrl) => { // lambda syntax
    ctrl.value = nbr;
    ctrl.style.color = (nbr % 2 == 0) ? "red" : "black" //
    ctrl.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal"
    ctrl.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal"
}

// const clicked = () => {
//     let inpCtrl = document.getElementById("fredInput"); // Now have programmatic access to the input control
//     let contents = inpCtrl.value; // Setting contents to the value in the inpCtrl
//     let lblCtrl = document.getElementById("lbl"); // Programmatic access to the label control
//     lblCtrl.innerText = contents; // Pushing data into the label
// }
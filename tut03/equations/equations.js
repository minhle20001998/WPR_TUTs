function clickButton() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let p = document.getElementById('result');
    if (a == "" || b == "" || c == "") {
        p.innerHTML = "Please fill the boxes"
        p.style.color = "red";
    } else {
        p.innerHTML = quadraticEquation(a, b, c);
        p.style.color = "blue";
    }
}

function linearEquation(a, b) {
    if (a != 0) {
        return "x: " + (-b / a);
    } else if (a == 0 && b != 0) {
        return "no solution";
    } else {
        return "inf solution";
    }
}

function quadraticEquation(a, b, c) {
    let delta = b ** 2 - 4 * a * c;
    if (c == 0) {
        return linearEquation(a, b);
    }
    if (delta > 0) {
        let x1, x2;
        x1 = (-b - Math.sqrt(delta)) / 2 * a;
        x2 = (-b + Math.sqrt(delta)) / 2 * a;
        return "Two root: x1= " + x1 + ", x2= " + x2;
    } else if (delta == 0) {
        return "One root: x= " + ((-b) / 2 * a);
    } else {
        return "no solution";
    }
}
function sw(){
    creatDia();
}
count=0;
function creatDia() {
    var dia = document.createElement("img"); dia.src = "./res/index/poem" + count + ".png";
    dia.style.position = "absolute";dia.style.width="600px";
    dia.style.left ="50%"; dia.style.top = "10%";dia.style.marginLeft="-300px";
    dia.style.animation = "dias 3s ease";
    document.body.appendChild(dia);

    dia.addEventListener("animationend", function () {
        document.body.removeChild(this);
    }, false);

    if (count == 2) {
        //document.body.appendChild(startbt);
        //return 0;
        count=0;
    }
    count++;
    window.setTimeout(creatDia, 3000);
}

function drag(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev){
    ev.preventDefault();
}

$(async function(){
  addDescriptions();
  alignSelector();
});

function addDescriptions(){
  let desc = ["STINK CAPSULE","SPELL CASTER OVERLOAD", "POISON", "MOTHER PLANT", "BE CRUSHED TO DEATH BY A MURPHY BED", "BE CRUSHED TO DEATH BY A VENDING MACHINE", "BE SLAIN BY A VICIOUS KILLER RABBIT", "LIGHTNING", "ELDERLY DEMISE", "ELDER EXHAUSTION", "DROWNING IN THE OCEAN", "DEATH FLOWER",
                "URBAN MYTH", "CARDIAC EXPLOSION", "CHICKEN", "COW PLANT", "OVER HEATING", "METEORITE", "LAUGHTER", "FREEZING", "ELECTROCUTION", "FALLING", "FIRE", "FLIES", "DROWN", "ULTIMATE MORTIFICATION", "SUN", "STEAM ROOM OVER HEATING", "STARVING", "RABID RODENT FEVER", "PUFFERFISH"];
  for(let i = 0; i < desc.length; i++){
    let new_div = document.createElement('div');
    new_div.setAttribute('class', 'panel');
    var coloring = i % 4;
    switch(coloring){
      case 0:
        new_div.style.backgroundColor = "red";
        new_div.style.color = "pink";
        break;
      case 1:
        new_div.style.backgroundColor = "green";
        new_div.style.color = "#DDFFDD";
        break;
      case 2:
        new_div.style.backgroundColor = "blue";
        new_div.style.color = "cyan";
        break;
      case 3:
        new_div.style.backgroundColor = "beige";
        new_div.style.color = "brown";
        break;
    }
    new_div.textContent = desc[i];
    document.getElementById('wheel').appendChild(new_div);
  }
}

function spinWheel(speed = 5){
  //var speed = document.getElementById('speed').value;
  var wheel = document.getElementById('wheel');
  var panels = document.getElementsByClassName("panel");
  var time = Math.random() * 700 + 500;
  var panel_height = 200;

  var id = setInterval(frame, 1);
  var count = 0;
  function frame(){
    if(count < time){
      var current_padding = Number(wheel.style.paddingTop.replace("px", ""));
      if(current_padding > 200){
        var arr = [panels[panels.length - 1]];
        for(let p = 0; p < panels.length-1; p++){
          arr.push(panels[p]);
        }
        wheel.innerHTML = "";
        for(let p of arr){
          wheel.appendChild(p);
        }
        
        var new_padding = current_padding -200;
        wheel.style.paddingTop= new_padding + "px";
      }else{
        var new_padding = current_padding + speed;
      }
      wheel.style.paddingTop = new_padding + "px";
      count++;

    }else{
      var result = getResult();
      console.log("result: " + result);
      alert(result);
      clearInterval(id);
    }
  }
}

function getResult(){
  var selector = document.getElementsByClassName('selector')[0];
  let rect = selector.getBoundingClientRect();
  let left = rect.left;
  let top = rect.top;
  let bottom = rect.bottom;
  let mid = (top + bottom)/2;
  let point = left + 120;
  let elements = elementsFromPoint(point, mid);
  for(let e of elements){
    if(e.className.includes('panel')) return e.textContent();
  }
  return "Error! Spin again!";
}

function alignSelector(){
  var selector = document.getElementsByClassName('selector')[0];
  var wheel = document.getElementById('wheel');
  let rect = wheel.getBoundingClientRect();
  let left = rect.left;
  left = left - 60;
  selector.style.left = left + "px";
}

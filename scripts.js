$(async function(){
  google.script.run.withSuccessHandler(addDescriptions).getDescriptions();
});

function addDescriptions(dbl_arr){
  for(let i = 0; i < dbl_arr.length; i++){
    let desc = dbl_arr[i][0];
    if(desc.length == 0) continue;
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
    new_div.textContent = desc;
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
      console.log("count: " + count);
      clearInterval(id);
    }
  }
}

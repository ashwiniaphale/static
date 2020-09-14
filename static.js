

//Trouble in Alaska 
hideElement("antartica_hello_label");
hideElement("hello_choice1");
hideElement("hello_choice2");
hideElement("thankgod_label"); 
hideElement("dontworry_button");
hideElement("safe_btn"); 
hideElement("thirdlabel_antarctica"); 
hideElement("name_input"); 
hideElement("hello_aria"); 
//Set Screen, Hello label 
onEvent("antarctica_btn", "click", function() {
  setScreen("trouble_in_antarctica");
  setTimeout(function() {
    showElement("antartica_hello_label");
  }, 1000);
  setTimeout(function() {
    showElement("hello_choice1");
    showElement("hello_choice2");
  }, 2000);
});
//First response, first label 
onEvent("hello_choice1", "click", function() {
  setTimeout(function(){
    showElement("thankgoodness_lbl");
  }, 2000); 
  setTimeout(function() {
    showElement("safe_btn");
    showElement("dontworry_button");
  }, 4000);
});
//Second response, first label 
onEvent("hello_choice2", "click", function (){
  setTimeout(function(){
    showElement("thankgod_label");
  }, 2000); 
  setTimeout(function() {
    showElement("safe_btn");
    showElement("dontworry_button");
  }, 4000);
}); 
//First response, second label 
onEvent("safe_btn", "click", function (){
  setTimeout(function(){
  showElement("thirdlabel_antarctica");
  }, 2000);
  setTimeout(function(){
  showElement("name_input");
  }, 2000);
  });
onEvent("dontworry_button", "click", function (){
  setTimeout(function(){
  showElement("thirdlabel_antarctica");
  }, 2000);
  setTimeout(function(){
  showElement("name_input");
  }, 2000);
  });
onEvent("name_input", "change", function() {
  setTimeout(function() {
    setProperty("fourth_label", "text", ("Please help me " + getText("name_input"))+ ", I'm Aria. Aria Carter.");
  }, 1000);
  showElement("fourth_label");
  setTimeout(function() {
    showElement("hello_aria");
  }, 2000);
});
//Fourth Label and name input
hideElement("fourth_label");


//AntSecondScreen 
hideElement("antsecond_firstlbl"); 
hideElement("antsecond_firstchoice"); 
hideElement("antsecond_secondchoice");
hideElement("surroundings_label"); 
hideElement("them_label"); 
hideElement("fire"); 
hideElement("supplies");
hideElement("supplies_label");
hideElement("fire_label"); 
hideElement("startingfire_label"); 
hideElement("food"); 

//Transition to screen2
onEvent("hello_aria", "click", function (){
  setScreen("antSecondScreen"); 
  setTimeout(function() {
      showElement("antsecond_firstlbl");
    }, 2000);
      setTimeout(function() {
    showElement("antsecond_firstchoice");
  }, 3000);
  setTimeout(function() {
    showElement("antsecond_secondchoice");
  }, 3000);
}); 

onEvent("antsecond_firstchoice", "click", function (){
  setTimeout(function(){
  showElement("surroundings_label");
  }, 2000);
  setTimeout(function(){
  showElement("supplies");
  }, 2000);
  setTimeout(function(){
  showElement("fire");
  }, 2000);
  });
onEvent("antsecond_secondchoice", "click", function (){
  setTimeout(function(){
  showElement("them_label");
  }, 2000);
   setTimeout(function() {
    showElement("fire");
  }, 3000);
  setTimeout(function() {
    showElement("supplies");
  }, 3000);
  });
onEvent("fire", "click", function (){
  setTimeout(function() {
    showElement("fire_label");
  }, 3000);
  setTimeout(function() {
    showElement("startingfire_label");
  }, 5000);
  setTimeout(function() {
    showElement("food");
  }, 5000);
  
}); 
//Animal attack death 
onEvent("supplies", "click", function (){
  setTimeout(function() {
    showElement("supplies_label");
  }, 3000);
  setTimeout(function(){
  setScreen("animalattack_death"); 
  playSound("Buzz-KP-943139131.mp3", false);
  }, 4000); 
  }); 
//Third Screen 
hideElement("antThird_first"); 
hideElement("yes_go"); 
hideElement("no_go"); 
hideElement("yes_label"); 
hideElement("caves");
hideElement("fishinghole");
hideElement("fishinglbl");
hideElement("hourslbl");
hideElement("fishingdone");
hideElement("goodnight");
onEvent("food", "click", function (){
  setScreen("antThirdScreen"); 
  setTimeout(function(){
  showElement("antThird_first");  
  showElement("yes_go"); 
  showElement("no_go");
  }, 2000); 
  
});

onEvent("yes_go", "click", function() {
  setTimeout(function() {
    showElement("yes_label");
    showElement("fishinghole");
    showElement("caves");
  }, 2000);
});
onEvent("fishinghole", "click", function (){
  setTimeout(function(){
   showElement("fishinglbl"); 
  }, 2000);
  setTimeout(function(){
    showElement("hourslbl");
  }, 8000); 
  setTimeout(function(){
    showElement("fishingdone");
  }, 10000);
  setTimeout(function(){
    showElement("goodnight");
  }, 12000);
}); 
onEvent("no_go", "click", function (){
  setTimeout(function() {
    setScreen("nofood_death");
    playSound("Buzz-KP-943139131.mp3", false);
  }, 2000);
  
}); 
//hide
hideElement("userlbl");
hideElement("ant4lbl");
hideElement("ok");
hideElement("picturebtn");
  hideElement("anarticapic");
  hideElement("locationlbl");
  hideElement("northlbl");
  hideElement("label7");
onEvent("goodnight", "click", function() {
  setScreen("antFourthScreen");
  setTimeout(function(){
    showElement("ant4lbl");
  }, 2000);
  setTimeout(function(){
    showElement("userlbl");
  }, 4000);
  setTimeout(function(){
    showElement("ok");
  }, 6000);
  setTimeout(function() {
    showElement("picturebtn");
  }, 8000);
  
});
onEvent("picturebtn", "click", function() {
  setTimeout(function(){
    showElement("anarticapic");
  }, 2000);
  setTimeout(function(){
    showElement("locationlbl");
  }, 5000);
  setTimeout(function(){
    showElement("northlbl");
  }, 8000);
  setTimeout(function(){
    showElement("label7");
  }, 10000);
  setTimeout(function(){
  setScreen("locations");
  }, 12000);
});

onEvent("caves", "click", function (){
  setTimeout(function(){
    setScreen("caveattack"); 
    playSound("Buzz-KP-943139131.mp3", false);
  }, 2000);
}); 

onEvent("pin1", "click", function() {
  setScreen("wonscreen");
});
onEvent("pin2", "click", function() {
  setScreen("wrongscreen");
});
onEvent("pin3", "click", function(){
    setScreen("wrongscreen");

});
function hide (){
  //First Screen
hideElement("antartica_hello_label");
hideElement("hello_choice1");
hideElement("hello_choice2");
hideElement("thankgod_label"); 
hideElement("thankgoodness_lbl");
hideElement("dontworry_button");
hideElement("safe_btn"); 
hideElement("thirdlabel_antarctica"); 
hideElement("name_input"); 
hideElement("hello_aria"); 
//Set Screen, Hello label 
onEvent("antarctica_btn", "click", function() {
  setScreen("trouble_in_antarctica");
  setTimeout(function() {
    showElement("antartica_hello_label");
  }, 2000);
  setTimeout(function() {
    showElement("hello_choice1");
    showElement("hello_choice2");
  }, 3000);
});
//First response, first label 
onEvent("hello_choice1", "click", function() {
  setTimeout(function(){
    showElement("thankgoodness_lbl");
  }, 2000); 
  setTimeout(function() {
    showElement("safe_btn");
    showElement("dontworry_button");
  }, 4000);
});
//Second response, first label 
onEvent("hello_choice2", "click", function (){
  setTimeout(function(){
    showElement("thankgod_label");
  }, 2000); 
  setTimeout(function() {
    showElement("safe_btn");
    showElement("dontworry_button");
  }, 4000);
}); 
//First response, second label 
onEvent("safe_btn", "click", function (){
  setTimeout(function(){
  showElement("thirdlabel_antarctica");
  }, 2000);
  setTimeout(function(){
  showElement("name_input");
  }, 2000);
  });
onEvent("dontworry_button", "click", function (){
  setTimeout(function(){
  showElement("thirdlabel_antarctica");
  }, 2000);
  setTimeout(function(){
  showElement("name_input");
  }, 2000);
  });
//Fourth Label and name input
  hideElement("fourth_label");
onEvent("name_input", "change", function() {
  setProperty("fourth_label", "text", ("Please help me " + getText("name_input"))+ ", I'm Aria. Aria Carter.");
  showElement("fourth_label");
  showElement("hello_aria"); 
});

  //Second Screen
  hideElement("antsecond_firstlbl"); 
  hideElement("antsecond_firstchoice"); 
  hideElement("antsecond_secondchoice");
  hideElement("surroundings_label"); 
  hideElement("them_label"); 
  hideElement("fire"); 
  hideElement("supplies");
  hideElement("supplies_label");
  hideElement("fire_label"); 
  hideElement("startingfire_label"); 
  hideElement("food");
  //Third Screen
  hideElement("antThird_first"); 
hideElement("yes_go"); 
hideElement("no_go"); 
hideElement("yes_label"); 
hideElement("caves");
hideElement("fishinghole");
hideElement("fishinglbl");
hideElement("hourslbl");
hideElement("fishingdone");
hideElement("goodnight");
//Fourth Screen 
hideElement("userlbl");
hideElement("ant4lbl");
hideElement("ok");
hideElement("picturebtn");
  hideElement("anarticapic");
  hideElement("locationlbl");
  hideElement("northlbl");
  hideElement("label7");
}

//Start Over
function startOver (n){
onEvent(n, "click", function() {
  setScreen("static_screen");
  setText("name_input", "");
  
  hide(); 
  
  onEvent("name_input", "change", function() {
  setProperty("name_input", " ");
  setProperty("fourth_label", "text", ("Please help me " + getText("name_input"))+ ", I'm Aria. Aria Carter.");
  showElement("fourth_label");
  showElement("hello_aria"); 
});
});

}

startOver("startOver1"); 
startOver("startOver2"); 
startOver("startOver3");
startOver("startOver4");
startOver("playAgain");

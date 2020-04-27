// Mario JSON Game - Activity 3.3.3
// Kyle Sartor - 17604702

var player1select ="";
var player2select ="";
var p1battle ="";
var p2battle ="";
var winnername ="";
var playerleftdesc ="";
var playerrightdesc ="";
var p1specialactive=false;
var p2specialactive=false;

/*--
document.getElementById("p2menu").addEventListener("click", function(){
  var e = document.getElementById("p1menu");
  var p1choice = e.options[e.selectedIndex].text;
  player1select = p1choice;
  alert(p1choice);
  alert(player1select);
}); 
--*/
//document.getElementById("p1mario").onclick = function() {setp1()};


$(".p1menu a").click( function() {
    player1select = $(this).text();
	document.getElementById('p1image').src= 'img/' + player1select + '.gif';
	//var playerimg = document.getElementById('p1image').src= 'img/' + player1select + '.gif';
	//alert(player1select);
	//alert(playerimg);
	$("#lefttitle").text(player1select);
	//$("#ftitle").text("PLAYERS READY");
	if (player1select == "Mario") {
		playerleftdesc = marioWorld.mario.description;
		$("#p1special").css("display","none");
		$("#p1special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
	} else if (player1select == "Bowser") {
		playerleftdesc = marioWorld.bowser.description;
		$("#p1special").text("ENABLE BOOST");
		$("#p1special").css("display","block");
		$("#p1special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
	} else if (player1select == "Princess Peach"){
		playerleftdesc = marioWorld.peach.description;
		$("#p1special").text("ENABLE DASH");
		$("#p1special").css("display","block");
		$("#p1special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
	}
	
	$("#leftsubtitle").text(playerleftdesc);
	checkplayerselect();
});

$(".p2menu a").click( function() {
    player2select = $(this).text();
	document.getElementById('p2image').src= 'img/' + player2select + '.gif';
	//var playerimg = document.getElementById('p1image').src= 'img/' + player1select + '.gif';
	//alert(player2select);
	//alert(playerimg);
		$("#righttitle").text(player2select);
	//$("#ftitle").text("PLAYERS READY");
	if (player2select == "Mario") {
		playerrightdesc = marioWorld.mario.description;
		$("#p2special").css("display","none");
		$("#p2special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
	} else if (player2select == "Bowser") {
		playerrightdesc = marioWorld.bowser.description;
		$("#p2special").text("ENABLE BOOST");
		$("#p2special").css("display","block");
		$("#p2special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
	} else if (player2select == "Princess Peach"){
		playerrightdesc = marioWorld.peach.description;
		$("#p2special").text("ENABLE DASH");
		$("#p2special").css("display","block");
		$("#p2special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
	}
	
	$("#rightsubtitle").text(playerrightdesc);
	checkplayerselect();
});

$("#p1special").click( function() {
	if (p1specialactive == false) {
		p1specialactive = true;
		//alert(p2specialactive);
	if (player1select == "Bowser") {
		marioWorld.bowser.activateboost();
		$("#p1special").text("BOOST ACTIVE!");
		$("#p1special").css("background-image","linear-gradient(-60deg, #ff5858 0%, #f09819 100%)");
		
		//alert(marioWorld.bowser.boost);
	} else if (player1select == "Princess Peach"){
		marioWorld.peach.activatedash();
		$("#p1special").text("DASH ACTIVE!");
		$("#p1special").css("background-image","linear-gradient(-60deg, #ff5858 0%, #f09819 100%)");
		//alert(marioWorld.peach.dash);
	}
	} else if (p1specialactive == true) {
		p1specialactive = false;
		//alert(p2specialactive);
		if (player1select == "Bowser") {
		marioWorld.bowser.deactivateboost();
		$("#p1special").text("ENABLE BOOST");
		$("#p1special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
		//alert(marioWorld.bowser.boost);
	} else if (player1select == "Princess Peach"){
		marioWorld.peach.deactivatedash();
		$("#p1special").text("ENABLE DASH");
		$("#p1special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
		//alert(marioWorld.peach.dash);
	}
	}
});

$("#p2special").click( function() {
	if (p2specialactive == false) {
		p2specialactive = true;
		//alert(p2specialactive);
	if (player2select == "Bowser") {
		marioWorld.bowser.activateboost();
		$("#p2special").text("BOOST ACTIVE!");
		$("#p2special").css("background-image","linear-gradient(-60deg, #ff5858 0%, #f09819 100%)");
		//alert(marioWorld.bowser.boost);
	} else if (player2select == "Princess Peach"){
		marioWorld.peach.activatedash();
		$("#p2special").text("DASH ACTIVE!");
		$("#p2special").css("background-image","linear-gradient(-60deg, #ff5858 0%, #f09819 100%)");
		//alert(marioWorld.peach.dash);
	}
	} else if (p2specialactive == true) {
		p2specialactive = false;
		//alert(p2specialactive);
		if (player2select == "Bowser") {
		marioWorld.bowser.deactivateboost();
		$("#p2special").text("ENABLE BOOST");
		$("#p2special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
		//alert(marioWorld.bowser.boost);
	} else if (player2select == "Princess Peach"){
		marioWorld.peach.deactivatedash();
		$("#p2special").text("ENABLE DASH");
		$("#p2special").css("background-image","linear-gradient(to right, #dc3545 0%, #dc3545 100%)");
		//alert(marioWorld.peach.dash);
	}
	}
});


function checkplayerselect() {
	
if ((player1select !== "") && (player2select !== "")) {
	//alert("players ready");
	$("#fightbtn").removeClass("disabled");
	$("#fightbtn").addClass("enabled");
	$("#fightbtn").text("FIGHT"); 
	var versus = (player1select + " vs " + player2select)
	$("#ftitle").text(versus);
	//$("#ftitle").text("PLAYERS READY");
	$("#fsubtitle").text("Click Fight!");
}
	}

$("#fightbtn").click( function() {
	
	if (player1select == "Mario") {
		p1battle = marioWorld.mario;
	} else if (player1select == "Bowser") {
		p1battle = marioWorld.bowser;
	} else if (player1select == "Princess Peach"){
		p1battle = marioWorld.peach;
	}
	
	if (player2select == "Mario") {
		p2battle = marioWorld.mario;
	} else if (player2select == "Bowser") {
		p2battle = marioWorld.bowser;
	} else if (player2select == "Princess Peach"){
		p2battle = marioWorld.peach;
	}
	
	var winnerceleb = marioWorld.bossBattle(p1battle, p2battle);
	if (winnername == "Draw") {
	$("#fsubtitle").text(winnerceleb);
	$("#ftitle").text("DRAW");
		} else {
    $("#fsubtitle").text(winnerceleb);
	$("#ftitle").text(winnername + " WINS!");
			}
	//marioWorld.bossBattle(marioWorld.mario, marioWorld.bowser);
	//$("#fightbtn").removeClass("enabled");
	//$("#fightbtn").addClass("disabled");
	//$("#fightbtn").text("CHOOSE FIGHTERS TO PLAY AGAIN"); 
	$("#resetbtn").css("display","inline-block");
	$("#fightbtn").text("FIGHT AGAIN");  
});

$("#resetbtn").click( function() {
	window.location.reload();
});

var marioWorld = {
  mario: {
    name:"Mario",
    description:"Small and jumpy. Likes princesses.",
    celebration: "Mario wins and does a little dance",
    height: 10,
    weight:3,
    speed:12,
    attackPower: function() {
      return this.weight * this.speed;
    }
  },
  bowser: {
    name:"Bowser",
    description:"Big and green, Hates princesses.",
    celebration: "Bowser wins and does a big roar",
    height: 16,
    weight: 6,
    speed: 4,
    boost: 0,
	activateboost: function() {
      marioWorld.bowser.boost = (marioWorld.bowser.boost + 5);
    }, 
	deactivateboost: function() {
      marioWorld.bowser.boost = (marioWorld.bowser.boost - 5);
    }, 
    attackPower: function() {
      return this.weight * (this.speed + this.boost);
    }
  },
  peach: {
    name:"Princess Peach",
    description:"Light and fast, Likes Plumbers.",
    celebration: "Princess Peach does her hair flick and checks her nails",
    height: 12,
    weight: 2,
    speed: 16,
    dash: 0,
    activatedash: function() {
      marioWorld.peach.dash = (marioWorld.peach.dash + 5);
    }, 
	deactivatedash: function() {
      marioWorld.peach.dash = (marioWorld.peach.dash - 5);
    }, 
    attackPower: function() {
      return this.weight * (this.speed + this.dash);
    }
  },
  bossBattle: function(contestant1, contestant2) {
   // alert(contestant1.name + " vs " + contestant2.name);
    if (contestant1.attackPower() > contestant2.attackPower()) {
      //alert(contestant1.celebration);
		winnername = contestant1.name;
		return (contestant1.celebration);
    } else if (contestant1.attackPower() == contestant2.attackPower()){
		winnername = "Draw";
		return ("It's a Draw!");
	} else {
      //alert(contestant2.celebration);
		winnername = contestant2.name;
		return (contestant2.celebration);
    }
  }
}
//marioWorld.bossBattle(marioWorld.mario, marioWorld.bowser);
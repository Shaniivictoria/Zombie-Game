
const zombie1 = document.getElementById("zombie1");
const zombie2 = document.getElementById("zombie2");
const zombie3 = document.getElementById("zombie3");
const zombie4 = document.getElementById("zombie4");

const zombies = [zombie1,zombie2,zombie3,zombie4];

for(let i = 0;i<zombies.length;i++){
	
	zombies[i].addEventListener('click',()=>{
		shoot(zombies[i]);
		zombies[i + 1].style.display = "block";
	})
	
}



function livingZombie() {
	return document.querySelectorAll(".zombie:not(.dead)");
}


function shoot(zombie) {
	zombie.classList.add("dead");

	if(!livingZombie().length) {
		alert("You BLASTED EM'!");
		window.location.reload();
	}

}


function zombieAttacksMe(zombie) {

	if(scorePoints > 0) {

		zombie.classList.add("showing");

		setTimeout(()=> {
			zombieShootsMe(zombie);
		}, 1000);

		setTimeout(()=> {
			zombie.classList.remove("showing");
		}, 3000);
		
	}


}


function zombieShootsMe(zombie) {

	if(!zombie.classList.contains("dead")) {

		zombie.classList.add("shooting");
		updateScorePoints(scorePoints - 20);

		setTimeout(()=> {
			zombie.classList.remove("shooting");
		}, 200);

	}

}



//button
const startButton = document.getElementById("startButton")
startButton.addEventListener('click',()=>{
	zombie1.style.display = "block";
})
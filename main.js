// create two player 
    currentPlayer = ""
        let characters = {

    player1:{
        health: 5,



    },
    player2:{
        health: 5,
     

    }

        }

//Shooting function//

function shoot(zombie){
//alert("boom!"); -- this function works, going to keep for reminder//
zombie.classList.add("dead");

}

//zoombie attacking me//
function zombieAttacksMe(zombie){
    zombie.classList.add ("showing");
    setTimeout(  ()=> {
        zombie.classList.remove("showing")
    }, 3000);

    }

    var zombie = document.querySelector("#zombie1")
    zombieAttacksMe(zombie1);

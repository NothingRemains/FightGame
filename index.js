  
  let playerHP = document.querySelector('#playerHP').innerText
  const playerAttack = document.querySelector("#playerAttack").innerText
  const playerDefense = document.querySelector("#playerDefense").innerText
  let enemyHP = document.querySelector("#enemyHP").innerText
  const enemyAttack = document.querySelector("#enemyAttack").innerText
  const enemyDefense = document.querySelector("#enemyDefense").innerText

//Function for player to attack enemy and enemy to attack player back
function makeAttack() {

  let playerAtkModifier = Math.random() + 0.5
  let enemyAtkModifier = Math.random() + 0.5

  playerHP -= (enemyAttack*enemyAtkModifier > playerDefense) ? 
              Math.floor((enemyAttack*enemyAtkModifier - playerDefense)) : 1;

  enemyHP -= (playerAttack*playerAtkModifier > enemyDefense) ? 
             Math.floor((playerAttack*playerAtkModifier - enemyDefense)) : 1;
  
  document.querySelector('#playerHP').innerText = playerHP;
  document.querySelector("#enemyHP").innerText = enemyHP;
 
}

const playerClass = document.getElementById("playerSelection")

document.querySelector("#clickMe").addEventListener('click', makeAttack)
// document.getElementById("playerSelection").addEventListener('change', {
//   console.log(`Selected ${playerClass.value}.`)
// })
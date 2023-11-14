let storyStep = 0;

function startGame() {
    document.getElementById('story-text').innerText = "In the starting of the game, you have two options: Treasure Hunt or Genie Hunt.";
    document.getElementById('user-input-label').style.display = "block";
    document.getElementById('user-input').style.display = "block";
    document.getElementById('user-input').value = "";
    document.getElementById('user-input').disabled = false;
    document.getElementById('user-input').focus();
    document.getElementById('user-input-label').innerText = "Enter your choice:";
    document.getElementById('user-input').placeholder = "choose and type your choice between the above two";
    document.getElementById('user-input').addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            continueStory();
        }
    });
    document.getElementById('story-text'); 
    
    document.getElementById('play-button').style.display = "none";
}

function continueStory() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const storyTextElement = document.getElementById('story-text');

    switch (storyStep) {
        case 0:
            switch (userInput) {
                case "treasure hunt":
                    storyTextElement.innerText = "Great choice! Now you have two options: Mowgli or Witch.";
                    document.getElementById('story-text');
                    document.body.style.backgroundImage = "url('mowgli_witch.jpg')";
                    					
                    break;
                case "genie hunt":
                    storyTextElement.innerText = "You chose Genie Hunt. Now you have two options: Aladdin or Witch.";
                    document.getElementById('story-text'); 
					document.body.style.backgroundImage = "url('aladdin_witch.jpg')";
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;
        case 1:
            switch (userInput) {
                case "mowgli":
                    storyTextElement.innerText = "You chose Mowgli. Now you have two options: Left or Right.";
                    document.getElementById('story-text'); 
					document.body.style.backgroundImage = "url('leftright.jpg')";
                    break;
                case "witch":
                    storyTextElement.innerText = "You chose Witch. Unfortunately, you got killed by the witch. Game over!";
					document.getElementById('story-text'); 
                    document.body.style.backgroundImage = "url('witchkill')";; 
                    disableInput();
                    break;
                case "aladdin":
                    storyTextElement.innerText = "You chose Aladdin. Now you have two options: Wand or Sword.";
					document.getElementById('story-text'); 
                    document.body.style.backgroundImage = "url('wand_sword.jpg')";; 
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;
        case 2:
            switch (userInput) {
                case "left":
                    storyTextElement.innerText = "You chose Left. It's a dead end of the forest. Game over!";
                    document.getElementById('story-text');
					document.body.style.backgroundImage = "url('leftroad.jpg')";
                    disableInput();
                    break;
                case "right":
                    storyTextElement.innerText = "You chose Right. Now you have two options: Apple or Mysterious Fruit.";
                    document.getElementById('story-text'); 
					document.body.style.backgroundImage = "url('fruits.jpg')";
                    break;
                case "wand":
                    storyTextElement.innerText = "You chose Wand. Now you have two magical powers: Rotate the wand or Whip the wand.";
                    document.getElementById('story-text');
					document.body.style.backgroundImage = "url('rotatewhip.jpg')";
                    break;
				case "sword":
                    storyTextElement.innerText = "You chose sword. sword cant get you to genie you have ended the game";
                    document.getElementById('story-text');
					document.body.style.backgroundImage = "url('rotatewhip.jpg')";
					disableInput();
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;
        case 3:
            switch (userInput) {
                case "rotate the wand":
                    storyTextElement.innerText = "You chose to rotate the wand. Now you have two options: Rotate towards left or Rotate towards right.";
                    document.getElementById('story-text');
                    document.body.style.backgroundImage = "url('wand.jpg')";					
                    break;
                case "whip the wand":
                    storyTextElement.innerText = "You chose to whip the wand. Unfortunately, the wand falls down and gets broken. Game over!";
                    document.getElementById('story-text'); 
					document.body.style.backgroundImage = "url('brokenwand.jpg')";
                    disableInput();
                    break;
                case "mysterious fruit":
                    storyTextElement.innerText = "You chose Mysterious Fruit. Unfortunately, you died of food poisoning. Game over!";
                    document.getElementById('story-text'); 
					document.body.style.backgroundImage = "url('poisonedmowgli.jpg')";
                    disableInput();
                    break;
				case "apple":
                    storyTextElement.innerText = "You chose apple. you have got your energy!, now choose bvetween hill or water";
                    document.getElementById('story-text'); 
					document.body.style.backgroundImage = "url('hillwater.jpg')";
                    
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;
        case 4:
            switch (userInput) {
                case "rotate towards left":
                    storyTextElement.innerText = "You chose to rotate the wand towards left and You landed on Earth without the genie.";
                    document.getElementById('story-text'); 
					document.body.style.backgroundImage = "url('landingaladdin.jpg')";
					disableInput();
                    break;
                case "rotate towards right":
                    storyTextElement.innerText = "You chose to rotate the wand towards right. Congratulations! You see the genie and can ask for a wish. You won the Genie Hunt!";
                    document.getElementById('story-text'); 
					document.body.style.backgroundImage = "url('genie.jpg')";
					disableInput();
                    break;
				case "water":
                    storyTextElement.innerText = "You chose Water. Congratulations! You found keys. Now you have two options: Take keys or Don't take keys.";
                    document.getElementById('story-text');
                    document.body.style.backgroundImage = "url('keys.jpg')";					
                    break;
                case "hill":
                    storyTextElement.innerText = "You chose Hill. Unfortunately, you slipped and died. Game over!";
                    document.getElementById('story-text');
					document.body.style.backgroundImage = "url('mowglihillslip.jpg')";					
                    disableInput();
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;
        case 5:
            switch (userInput) {
                
                case "take keys":
                    storyTextElement.innerText = "You chose to take keys for that you have to fight a shark for treasure . Now you have two options: Fight a shark or Surrender for shark.";
                    document.getElementById('story-text');
                    document.body.style.backgroundImage = "url('shark.jpg')";
                    break;
                case "don't take keys":
                    storyTextElement.innerText = "You chose not to take keys. People don't praise you after going back. Game over!";
                    document.getElementById('story-text');
                    document.body.style.backgroundImage = "url('sadmowgli.jpg')";					
                    disableInput();
                    break;
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;
        case 6:
            switch (userInput) {
                case "fight a shark":
                    storyTextElement.innerText = "You chose to fight a shark. Congratulations! You won the treasure!";
                    document.getElementById('story-text');
                    document.body.style.backgroundImage = "url('happymowgli.jpg')";
					disableInput();					
                    break;
                case "surrender for shark":
                    storyTextElement.innerText = "You chose to surrender for a shark. You didn't get the treasure, but you got hurt by the shark. Game over!";
                    document.getElementById('story-text');
                    document.body.style.backgroundImage = "url('surrendered.jpg')";					
                    disableInput();
                    break;
                
                default:
                    storyTextElement.innerText = "Invalid choice. Game over!";
                    disableInput();
            }
            break;
        
        default:
            storyTextElement.innerText = "The end.";
            disableInput();
            break;
    }

    storyStep++;
}

function disableInput() {
    document.getElementById('user-input').disabled = true;
    document.getElementById('user-input-label').innerText = "Game over. Refresh the page to play again.";
}

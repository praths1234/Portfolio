
var texts = [
    "Electronics-Communication Engineer",
    "Full Stack(MERN Stack) Developer",
    "Competitive Programmer",
    "Beginner in DSA",
    "Creative Thinker"
  ];
  var index = 0;
  var textElement = document.getElementById("typing-animation");
  
  function typingAnimation() {
    var currentText = texts[index];
    var currentTextIndex = 0;
  
    function typeCharacter() {
      if (currentTextIndex < currentText.length) {
        textElement.innerHTML += currentText.charAt(currentTextIndex);
        currentTextIndex++;
        setTimeout(typeCharacter, 100);
      } else {
        setTimeout(eraseCharacter, 1000);
      }
    }
  
    function eraseCharacter() {
      if (currentTextIndex >= 0) {
        textElement.innerHTML = currentText.substring(0, currentTextIndex);
        currentTextIndex--;
        setTimeout(eraseCharacter, 50);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(typingAnimation, 500);
      }
    }
  
    typeCharacter();
  }
  
  typingAnimation();
  
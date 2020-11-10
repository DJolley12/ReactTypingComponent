function TypingEffectScript(props) {
    let {
      wordNumberForIntro,
      wordNumberForText,
      intros,
      descriptions,
      currentPhraseSelection,
      introText,
      descriptionsText,
      slicedWord,
      index,
      subtractIndex,
      typingContentElementId,
    } = returnVariables(props);
  
    (function typeDescriptions() {
      let timeOutNumber = 50;
  
      if (
        wordNumberForText === descriptions.length &&
        wordNumberForIntro === intros.length
      ) {
        wordNumberForIntro = 0;
        wordNumberForText = 0;
  
        return;
      }
  
      if (wordNumberForIntro !== intros.length) {
        currentPhraseSelection = intros[wordNumberForIntro];
        slicedWord = currentPhraseSelection.slice(0, ++index);
  
        if (checkElementNotMounted(typingContentElementId)) {
          return;
        }
        document.getElementById(typingContentElementId).textContent =
          introText + slicedWord;
  
        if (slicedWord.length === currentPhraseSelection.length) {
          wordNumberForIntro++;
          index = 0;
          timeOutNumber = 200;
          introText += slicedWord;
          if (checkElementNotMounted(typingContentElementId)) {
            return;
          }
          document.getElementById(typingContentElementId).textContent = introText;
        }
      } else if (wordNumberForIntro === intros.length) {
        timeOutNumber = 25;
        subtractIndex = introText.length;
  
        introText = introText.slice(0, --subtractIndex);
        if (checkElementNotMounted(typingContentElementId)) {
          return;
        }
        document.getElementById(typingContentElementId).textContent = introText;
  
        if (introText.length === 0) {
          timeOutNumber = 130;
          currentPhraseSelection = descriptions[wordNumberForText];
          slicedWord = currentPhraseSelection.slice(0, ++index);
  
          if (checkElementNotMounted(typingContentElementId)) {
            return;
          }
          document.getElementById(typingContentElementId).textContent =
            descriptionsText + slicedWord;
  
          if (slicedWord.length === currentPhraseSelection.length) {
            wordNumberForText++;
            index = 0;
            timeOutNumber = 130;
            descriptionsText += slicedWord;
            if (checkElementNotMounted(typingContentElementId)) {
              return;
            }
            document.getElementById(
              typingContentElementId
            ).textContent = descriptionsText;
          }
        }
      }
      setTimeout(typeDescriptions, timeOutNumber);
    })();
  }
  
  function checkElementNotMounted(elementId) {
    if (document.getElementById(elementId) === null) {
      return true;
    }
    return false;
  }
  
  function returnVariables(props) {
    let intros = props.text1;
    let descriptions = "";
    if (props.text2 !== undefined) {
      descriptions = props.text2;
    }
    let wordNumberForIntro = 0;
    let wordNumberForText = 0;
    let index = 0;
    let subtractIndex = 0;
    let currentPhraseSelection = "";
    let introText = "";
    let descriptionsText = "";
    let slicedWord = "";
    let typingContentElementId = props.typingContentElementId;
    return {
      wordNumberForIntro,
      wordNumberForText,
      intros,
      descriptions,
      currentPhraseSelection,
      introText,
      descriptionsText,
      slicedWord,
      index,
      subtractIndex,
      typingContentElementId,
    };
  }
  
  export default TypingEffectScript;
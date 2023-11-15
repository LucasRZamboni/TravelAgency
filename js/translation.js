function toggleLanguage(destination) {
  var textPortuguese = document.querySelector(`.${destination} .text-portuguese`);
  var textEnglish = document.querySelector(`.${destination} .text-english`);
  var toggleLabel = document.querySelector(`.${destination} .toggle-language-label`);
  
  if (toggleLabel.textContent.trim() === 'English') {
    textPortuguese.style.display = 'none';
    textEnglish.style.display = 'block';
    toggleLabel.textContent = 'Português';
  } else {
    textPortuguese.style.display = 'block';
    textEnglish.style.display = 'none';
    toggleLabel.textContent = 'English';
  }
}

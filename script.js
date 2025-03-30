
// Translations for the welcome message
const translations = {
  ar: { welcome: "مرحبًا بكم في موقعنا!" },
  en: { welcome: "Welcome to our website!" },
  'pt-BR': { welcome: "Bem-vindo ao nosso site!" },
  'es-MX': { welcome: "¡Bienvenido a nuestro sitio web!" },
  it: { welcome: "Benvenuto nel nostro sito web!" },
  de: { welcome: "Willkommen auf unserer Website!" },
  fr: { welcome: "Bienvenue sur notre site web !" },
  'en-GB': { welcome: "Welcome to our website!" }
};

// Toggle the dropdown menu
function toggleDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  dropdown.classList.toggle('show');
}

// Change the language
function changeLanguage(lang) {
  const welcomeText = document.getElementById('welcome');
  welcomeText.textContent = translations[lang].welcome;
  toggleDropdown(); // Close the dropdown after selection
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.language-button')) {
    const dropdowns = document.getElementsByClassName('language-dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

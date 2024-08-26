const elements = [
  'esotilin', 
  'elpepe', 
  'etesech', 
  'potaxio', 
  'felansuki', 
  'elpepeconeletesech'
];

const replacements = {
  'a': '4',
  't': '7',
  'o': '0',
  'z': '2'
};

function applyReplacements(str) {
  return str.replace(/[aotz]/g, char => replacements[char] || char);
}

function randomCase(str) {
  return str.split('').map(char => Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()).join('');
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword() {
  let base = getRandomElement(elements);
  base = applyReplacements(base);
  base = randomCase(base);

  let password = base;

  // Agrega caracteres adicionales para hacer la contraseña más segura
  const additionalChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  for (let i = 0; i < 8; i++) {
      password += additionalChars[Math.floor(Math.random() * additionalChars.length)];
  }

  return password;
}

document.getElementById('generate').addEventListener('click', () => {
  const password = generatePassword();
  document.getElementById('password').value = password;
});


export default function game(character) {
  let characterHealth = '';

  if (character.health > 50) {
    characterHealth = 'healthy';
  } else if (character.health >= 15) {
    characterHealth = 'wounded';
  } else characterHealth = 'critical';
  return characterHealth;
}

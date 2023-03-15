function scuberGreetingForFeet(ride){
  if (ride === 199) { 
    return ('This one is on me!');
  } 
  else if (ride === 1500) {
    return ('That will be twenty bucks.');
  }
  else if (ride === 2001 ) {
    return ('I will gladly take your thirty bucks.');
  }
  else if (ride === 2501) {
    return ('No can do.');
  }
}
 
function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
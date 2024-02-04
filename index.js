function scuberGreetingForFeet(feet) {
  // Write your code here!

  if (feet <= 199) {
    return "This one is on me!";
  } else if (feet >= 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(charm) {
  // Write your code here!
  switch (charm) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

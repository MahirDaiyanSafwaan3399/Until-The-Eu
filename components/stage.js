export let stage = (score) => {
    if (score <= 10) {
      return "None";
    } else if (score <= 15 && score > 10) {
      return "Alarm Stage";
    } else if (score <= 20 && score > 15) {
      return "Resistance Stage";
    } else {
      return "Exhaustion Stage";
    }
  };
  
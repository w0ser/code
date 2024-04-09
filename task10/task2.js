const dog = {
    name: "Чарли",
    type: "Собака",
    makeSound() {
      return 'Гав-Гав';
    }
  };
  
  const bird = {
    name: "Петя",
    type: "Воробей",
    makeSound() {
      return 'Чик-чирик';
    }
  };
  
  function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {
      name: this.name,
      type: this.type,
      makeSound: this.makeSound,
      isDomestic
    }
  }
  
  // Использование bind
  const dogMakeDomestic = makeDomestic.bind(dog);
  const domesticDog = dogMakeDomestic(true);
  
  // Использование call
  const birdMakeDomesticCall = makeDomestic.call(bird, false);
  
  // Использование apply
  const birdMakeDomesticApply = makeDomestic.apply(bird, [false]);
  
  console.log(domesticDog);
  console.log(birdMakeDomesticCall);
  console.log(birdMakeDomesticApply);
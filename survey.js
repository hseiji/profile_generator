const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`${answer} is an interesting person! Besides coding every day, ${answer} also likes ${answer2} and sometimes even listening to ${answer3} while doing that! The perfect ${answer4} would have ${answer5}. Moreover, playing ${answer6} is so much fun that times flies by without noticing. Having the ability to ${answer7} is considered by many as my super power and I love it!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
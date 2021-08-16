class World {
  
  constructor() {
  }
  
  update() {
  }
  
  secrets() {
    if(worldFlag === 3) {
    if(player.deltax === 700) {
      grid[3][9].block = false;
      grid[4][9].block = false;
      grid[5][9].block = false;
      grid[6][9].block = false;
      }
    }

    
  }
  make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
      }
    return arr;
  }
  drawText(input, textx, texty) {
    let output = "";
    for (var i = 0; i < input.length; i += 1) {
      output += input.charAt(i);
    }
    text(output, textx, texty);
    textSize(36);
  }
  playvid(file) {
    if(playing) {
      vid.stop();
      vid.hide();
      return;
    } else {
      vid = createVideo(str(file));
      vid.size(801,801);
      vid.position(-4,80);
      vid.play();
      vid.noLoop();
    }
    playing = !playing;
  }

  checkWorld() {
    if(worldFlag === 1) {
    
        ///FIRST WORLD///
    this.drawText("Welcome to my syllabus", 180, 200);
    this.drawText("for AP CS Principles!", 200, 320);
    if(millis() > 5000) {
      this.drawText("You can use the arrow keys to move!", 100,600);
    }
    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.secondWorld();
      }
      else return;
    }
  } else if (worldFlag === 2) {
    
        ///SECOND WORLD///
    this.drawText("Continue through the rooms to see",100,200);
    this.drawText("a bit about me, the class, and", 140, 240);
    this.drawText("the projects we'll be working on.", 120, 280);
    this.drawText("Just follow the directions!", 200, 560);
    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.thirdWorld();
      }
      else return;
    } else if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.curiousWorld();
    } else return;
    }
    } else if (worldFlag === 3) {

        ///THIRD WORLD///

    this.drawText("We'll explore computers, coding,", 120,200);
    this.drawText("digital citizenship and careers.", 140,240);
    this.drawText("You will collaborate, cooperate,", 130,460);
    this.drawText("and compete with your classmates", 110, 500);
    this.drawText("to complete challenges, create,", 120, 540);
    this.drawText("and constructively criticize.",160,580);
    this.drawText("Keep going right to learn more!", 120, 620);
    
    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.fourthWorld();
      }
      else return;
    } else if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.secondWorld();
    } else return;
    }  else if(player.y >= 760) {
      if ( 240 < player.x && player.x < 560) {
        world.inquiryWorld();
      }
      else return;
    }
  } else if (worldFlag === 4) {

        ///FOURTH WORLD///

    this.drawText("I tinker with circuits, design with CAD,", 100, 200);
    this.drawText("code with JS, and build with whatever.", 100, 240);
    this.drawText("I grew up in Virginia, USA and love to", 100, 440);
    this.drawText("travel, explore new cultures, and meet", 100, 480);
    this.drawText("new people. I've made desks and drones,", 80, 520);    
    this.drawText("designed devices, and more. My hobbies", 80, 560);
    this.drawText("include playing video games and piano.", 90, 600);

    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.choiceWorld();
      }
      else return;
    } else if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.thirdWorld();
    } else return;
    }
  }  else if (worldFlag === 5) {
      
        ///CHOICE WORLD///
    //Right side Exit//
    if(player.x >= 760) {
      if ( 240 < player.y && player.y < 560) {
        world.appDesign();
      }
      else return;
      //Left side Exit//
    } else if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.gameDesign();
    } else return;
    }
    //Bot side Exit///
    if(player.y >= 760) {
      if ( 240 < player.x && player.x < 560) {
        world.webDesign();
      }
      else return;
      //Top side Exit//
    } else if (player.y <= 40) {
      if ( 240 < player.x && player.x < 560) {
        world.introCode();
    } else return;
    }
    this.drawText("App Design >", 550,400);
    this.drawText("< Game Design", 20,400);
    this.drawText("Website Design", 280,720);
    this.drawText("Intro to Coding", 280,80);
    
    if(interest > 4) {
      this.drawText("Thank you for exploring my Syllabus!", 120, 320);
      this.drawText("Here's a code that you'll need later:", 100, 480);
      if(interest > 7) {this.drawText("D",200,540)};
      if(curious){this.drawText("C",240,540)};
      if(gamer){this.drawText("G",280,540)};
      if(investigative){this.drawText("I",320,540)};
      
    }
    
  }  else if (worldFlag === 6) {
        ///WEB WORLD///
    this.drawText("We'll discuss digital citizenship and", 120,160);
    this.drawText("how to thrive in a world of websites.", 120, 200);
    this.drawText("You'll design and host websites, create", 90, 240);
    this.drawText("content for an online audience, and", 120, 280);
    this.drawText("provide feedback for your classmates.", 120, 320);
    this.drawText("Those of us with HTML experience, or", 90, 400);
    this.drawText("an interest in learning more will work", 100, 440);    
    this.drawText("collaboratively on a more challenging", 100, 480);
    this.drawText("project of our choosing.", 220, 520);
    
      if(player.y >= 760) {
        if ( 240 < player.x && player.x < 560) {
          world.webDesign2();
        }
      }
      if (player.y <= 40) {
        if ( 240 < player.x && player.x < 560) {
          world.choiceWorld();
        }
      }
  }  else if (worldFlag === 62) {

        ///WEB WORLD 2///
    image(website,150,180, 500, 500);

    this.drawText("If I can do it so can you!", 200,140);

      if (player.y <= 40) {
        if ( 240 < player.x && player.x < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 7) {
        ///GAME WORLD///
    this.drawText("Games are the oldest form of coding.", 110,160);
    this.drawText("We'll use games to cover loops, rules,", 100, 200);
    this.drawText("and more. Those interested in taking", 110, 240);
    this.drawText("game design further will learn how to", 120, 280);
    this.drawText("use logic to build games of their own!", 100, 320);
    this.drawText("With what you'll learn in the web", 140, 440);    
    this.drawText("and app design sections, you'll know", 120, 480);
    this.drawText("how to share your work with the world!", 100, 520);
    this.drawText("Keep going left to learn more!",180, 560);
    
     if (player.x <= 40) {
      if ( 240 < player.y && player.y < 560) {
        world.gameDesign2();
      }
     }
      if(player.x >= 760) {
        if ( 240 < player.y && player.y < 560) {
          world.choiceWorld();
      } else return;
    }
  }  else if (worldFlag === 72) {
    
        ///Game World 2///
    image(goGif,300,180, 200, 200);
    
    this.drawText("Those with interest or previous", 140, 440);    
    this.drawText("experience can take this further", 120, 480);
    this.drawText("by breaking down the concepts of", 100, 520);
    this.drawText("games to create one of your own!", 120,560);
    
      if(player.x >= 760) {
        if ( 240 < player.y && player.y < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 8) {
        ///APP WORLD///
    
    this.drawText("We'll discuss how to use code to make", 100,160);
    this.drawText("everyday actions easier, how to bring", 120, 200);
    this.drawText("new possibilities to communities, and", 100, 240);
    this.drawText("how to collaboratively design an app.", 120, 280);
    this.drawText("We'll work cooperatively at times and", 100, 440);
    this.drawText("competitively in others as we progress", 80, 480);    
    this.drawText("and focus on how to work together, hear", 80, 520);
    this.drawText("eachother, help eachother, and lead.", 120, 560);
    
     if(player.x >= 760) {
        if ( 240 < player.y && player.y < 560) {
          world.appDesign2();
        }
      }
      if (player.x <= 40) {
        if ( 240 < player.y && player.y < 560) {
          world.choiceWorld();
      } else return;
    }
  }  else if (worldFlag === 82) {

        ///APP DESIGN 2///
    image(kaopic,300,180, 200, 200);

    this.drawText("You can take what we'll learn even", 100, 440);    
    this.drawText("further by learning the potential", 120, 480);
    this.drawText("of scripting, canvassing for needs,", 110, 520);
    this.drawText("and implementing an app. We'll even", 100,560);
    this.drawText("explore career opportunities", 160,600);
    
      if(player.x <= 40) {
        if ( 240 < player.y && player.y < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 9) {
        ///Intro to Coding///

        this.drawText("First, we'll learn pseudocode. This is", 100,160);
        this.drawText("a mix of human and machine language.", 90, 200);
        this.drawText("Using this, you'll be able to solve", 120, 240);
        this.drawText("challenges, navigate mazes, and", 120, 280);
        this.drawText("more before we touch a computer", 120, 320);
        this.drawText("This class will help you learn the", 140, 440);
        this.drawText("cornerstones of problem solving, ", 140, 480);
        this.drawText("help you grow as leaders, collaborators,", 80, 520);
        this.drawText("designers, coders, builders, and more!", 100, 560);
        this.drawText("Move up to see an example!",180,640);

     if(player.y <= 40) {
        if ( 240 < player.x && player.x < 560) {
          world.introCode2();
        }
      }
      if(player.y >= 760) {
        if ( 240 < player.x && player.x < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 92) {
    
        ///Intro to Coding 2///
      image(golGif,220,380);

        this.drawText("This is a world of cells with 8 neighbors.", 80,140);
        this.drawText("Each cell can be live or dead.", 160, 200);
        this.drawText("Each cell counts the living neighbors.", 120, 240);
        this.drawText("Live cells with 2 or 3 live neighbors live.", 80, 280);
        this.drawText("Dead cells with 3 living neighbors go live.", 80, 320);
        this.drawText("All other dead cells stay dead.", 160,360);
        this.drawText("And we have a simulation of a universe!", 80, 680);
      
      if(player.y >= 760) {
        if ( 240 < player.x && player.x < 560) {
          world.choiceWorld();
        } else return;
      }
    }  else if (worldFlag === 10) {
    
        ///CURIOSITY WORLD///
      this.drawText("I appreciate curiosity :)", 180,400);
      if(player.x >= 760) {
        if ( 240 < player.y && player.y < 560) {
          world.secondWorld();
        }
        else return;
      }
    } else if (worldFlag === 11) {
    
        ///Inquiry WORLD///
      if (curious) {
        this.drawText("I don't know what brought you here,", 120,160);
        this.drawText("but I admire it and how much you have.",90,200);
        interested = true;
        
      }  else {
        this.drawText("I appreciate curiosity :)", 200,400);

      }
        if(240 < player.x < 560 && player.y <= 40) {
          world.thirdWorld();
          investigative = true;
      }
    }
  }
  baseWorld() {
    //left col
    grid[0][0].block = true;
    grid[0][1].block = true;
    grid[0][2].block = true;
      //left door
    grid[0][3].block = false;
    grid[0][4].block = false;
    grid[0][5].block = false;
    grid[0][6].block = false;

    grid[0][7].block = true;
    grid[0][8].block = true;
    grid[0][9].block = true;

    //top row
    grid[1][0].block = true;
    grid[2][0].block = true;
      //top door
    grid[3][0].block = false;
    grid[4][0].block = false;
    grid[5][0].block = false;
    grid[6][0].block = false;

    grid[7][0].block = true;
    grid[8][0].block = true;
    grid[9][0].block = true;

    //bottom row
    grid[1][9].block = true;
    grid[2][9].block = true;
      //bottom door
    grid[3][9].block = false;
    grid[4][9].block = false;
    grid[5][9].block = false;
    grid[6][9].block = false;
    
    grid[7][9].block = true;
    grid[8][9].block = true;

    //right col
    grid[9][1].block = true;
    grid[9][2].block = true;
      //right door
    grid[9][3].block = false;
    grid[9][4].block = false;
    grid[9][5].block = false;
    grid[9][6].block = false;

    grid[9][7].block = true;
    grid[9][8].block = true;
    grid[9][9].block = true;

  }
  firstWorld() {
    this.baseWorld();
    worldFlag = 1;

    this.blockLeftWall();
    this.blockTopWall();
    this.blockBotWall();

  }
  secondWorld() {
    this.baseWorld();
    if(worldFlag === 1 || worldFlag === 10) {
      player.deltax=100;
      player.deltay=400;
    } else if(worldFlag === 3) {
      player.deltax=700;
      player.deltay=400;
    }
    worldFlag = 2;

    this.blockTopWall();
    this.blockBotWall();
  }
  
  thirdWorld() {
    this.baseWorld();

    if(worldFlag === 2) {
      player.deltax=100;
      player.deltay=400;
    } else if(worldFlag === 4) {
      player.deltax=700;
      player.deltay=400;
    }  else if(worldFlag === 11) {
      player.deltax =400;
      player.deltay=700
    }
    worldFlag = 3;

    this.blockTopWall();
    this.blockBotWall();
  }
  
  fourthWorld() {
    this.baseWorld();
    worldFlag = 4;
    
    player.deltax=100;
    player.deltay=400;
    
    this.blockTopWall();
    this.blockBotWall();
  }
  
  choiceWorld() {
    this.baseWorld();
    worldFlag = 5;
    if(playing) {
      vid.stop();
      vid.hide();
      playing = !playing;
    }
    player.deltax=400;
    player.deltay=400;
  }
  webDesign() {
    this.baseWorld();
    worldFlag = 6;
    interest++;
    player.deltax = 400;
    player.deltay = 100;

    this.blockLeftWall();
    this.blockRightWall();
    
  }
  webDesign2(){
    this.baseWorld();
    worldFlag = 62;
    interest++;
    player.deltax = 400;
    player.deltay = 100;
    
    this.blockLeftWall();
    this.blockRightWall();
    this.blockBotWall();
  }
  gameDesign() {
    
    this.baseWorld();
    worldFlag = 7;
    interest++;
    player.deltax = 700;
    player.deltay = 400;
    this.blockTopWall();
    this.blockBotWall();
    
  }
  gameDesign2() {
    
    this.baseWorld();
    worldFlag = 72;
    interest++;
    player.deltax = 700;
    player.deltay = 400;
    this.blockTopWall();
    this.blockBotWall();
    this.blockLeftWall();
    
  }
  appDesign() {
    
    this.baseWorld();
    worldFlag = 8;
    interest++;
    player.deltax = 100;
    player.deltay = 400;

    this.blockTopWall();
    this.blockBotWall();

  }
  appDesign2() {
    
    this.baseWorld();
    worldFlag = 82;
    interest++;
    player.deltax = 100;
    player.deltay = 400;

    this.blockTopWall();
    this.blockBotWall();
    this.blockRightWall();

  }
  introCode() {
    
    this.baseWorld();
    worldFlag = 9;
    interest++;
    player.deltax = 400;
    player.deltay = 700;
    
    this.blockRightWall();
    this.blockLeftWall();
  }
  introCode2() {
    this.baseWorld();
    worldFlag = 92;
    interest++;
    player.deltax = 400;
    player.deltay = 700;
  
    this.blockRightWall();
    this.blockLeftWall();
    this.blockTopWall();
  }
  
  curiousWorld() {
    this.baseWorld();
    worldFlag = 10;
    curious = true;
    
    player.deltax = 700;
    player.deltay = 400;
    this.blockLeftWall();
    this.blockTopWall();
    this.blockBotWall();
  }
  
  inquiryWorld() {
    this.baseWorld();
    worldFlag  = 11;
    investigative = true;
    
    player.deltax = 400;
    player.deltay = 100;
    this.blockBotWall();
    this.blockLeftWall();
    this.blockRightWall();
  }
  //BLOCKING OFF WALLS CODE//
  blockLeftWall() {
    grid[0][3].block = true;
    grid[0][4].block = true;
    grid[0][5].block = true;
    grid[0][6].block = true;
  }
  blockRightWall() {
    grid[9][3].block = true;
    grid[9][4].block = true;
    grid[9][5].block = true;
    grid[9][6].block = true;
  }
  blockTopWall() {
    grid[3][0].block = true;
    grid[4][0].block = true;
    grid[5][0].block = true;
    grid[6][0].block = true;
  }
  blockBotWall() {
    grid[3][9].block = true;
    grid[4][9].block = true;
    grid[5][9].block = true;
    grid[6][9].block = true;
  }
}

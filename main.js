const players = [
    {
        name: 'Tomas',
        description: 'best character backgrounds come with the costs...',
        quote: '„Za Gudmunda život položím“',
        cardImage: 'card_tomas.jpg',
        class: 'Rare Cheater',
        ability: {
                    name: 'Powerplayer',
                    effect: 'Ask action have double effect'
            },
        weakness: {
            name: 'Ball Pit',
            effect: 'When misses 3 times, stops plaing for next round'
    },
        cheat: 5,
        arrive: 5
    },
    {
        name: 'Martin',
        description: 'Wanna be saved from badly prepared plot? With him, any sidetrack solo mission can result in time kill...',
        quote: '„Cool hláška“',
        cardImage: 'card_martin.jpg',
        class: 'Common Troublemaker',
        ability: {
                    name: 'Paranoid',
                    effect: 'If Martin is in play, GM cannot lie'
            },
        weakness: {
            name: 'Štěpán affinity',
            effect: 'If seated next Štěpán, stops playing every even round'
    },
        cheat: 2,
        arrive: 6
    },
    {
        name: 'Mates',
        description: 'Why have simple character making sense, when you can have space wizzard dude who just want his carpet back',
        quote: '„Jsem had“',
        cardImage: 'card_mates.jpg',
        class: 'common Lord of distraction',
        ability: {
                    name: 'Surpringly good idea',
                    effect: 'Mates has a chance to debuff the GM'
            },
        weakness: {
            name: 'Miniatures',
            effect: 'If miniatures are played, Mates is distracted for 2 rounds'
    },
        cheat: 3,
        arrive: 6
    },
    {
        name: 'Beasty',
        description: 'If you are not active enough, guess who will replace you?',
        quote: '„Jsem had“',
        cardImage: 'card_beasty.jpg',
        class: 'common game enthusiast',
        ability: {
                    name: 'hot tub',
                    effect: 'Greatly increases chance for other players to show up'
            },
        weakness: {
            name: 'Miniatures',
            effect: 'If miniatures are played, Mates is distracted for 2 rounds'
    },
        cheat: 2,
        arrive: 8
    },
    {
        name: 'Bambi',
        description: 'Perfect for lazy GM and award winner for best prepare player of 2015-2021',
        quote: '„cool cool“',
        cardImage: 'card_bambi.png',
        class: 'common nerd',
        ability: {
                    name: 'notes',
                    effect: 'If in play, no backsies for GM'
            },
        weakness: {
            name: 'Endless spell list',
            effect: 'Forbiden to play magic casters'
    },
        cheat: 2,
        arrive: 8
    },
    {
        name: 'Ruda',
        description: 'Perfect for good old days when damage was everything',
        quote: '„rozprodat a prodat!“',
        cardImage: 'card_ruda.jpg',
        class: 'epic ego compansator',
        ability: {
                    name: 'lucky dices',
                    effect: 'Can make his dices luckier'
            },
        weakness: {
            name: 'Balcony',
            effect: 'After two misses in row, stops playing for 3 rounds. he is looking for the dices downstairs.'
    },
        cheat: 2,
        arrive: 8
    }
]




function displayPlayer(player) {
    const playerElement = document.createElement("DIV");
    playerElement.id = player.name;
    // playerElement.setAttribute( "onclick",`selectPlayer("${player.name}")`);
    playerElement.innerHTML =
    ` <div class="card-container">
  
    <div class="card-background">
  
      <div class="card-frame">
  
        <div class="frame-header">
          <h1 class="name">${player.name}</h1>
          <i class="ms ms-g" id="mana-icon"></i>
        </div>
  
        <img class="frame-art" src="${player.cardImage}">
  
        <div class="frame-type-line">
          <h1 class="type">${player.class}</h1>
        </div>
  
        <div class="frame-text-box">
          <p class="description ftb-inner-margin">
          ${player.description}
          </p>
          <p class="description">
          Ability: ${player.ability.name}
          <br>
          ${player.ability.effect}
          </p>
          <p class="description">
          Weakness: ${player.weakness.name}
          <br>
          ${player.weakness.effect}
          </p>
          <p class="flavour-text">${player.quote}
          </p>
        
        </div>
        <header class="powerToughness">
        <div>
            <h2>${player.cheat}/${player.arrive}</h2>
        </div>
    </header>
        <div class="frame-bottom-info inner-margin">
          <div class="fbi-left">
            <p>140/184 R</p>
           
          </div>
  
          <div class="fbi-right">
          Casa de Švancar & Gymnázium dr. J Pekaře & Kost & Východní Marka(Brno)
          </div>
        </div>
  
      </div>
  
    </div>
  
  </div>`;
        document.getElementById("players").appendChild(playerElement);
        // console.log(playerElement);

    } 

    function displayPlayers() {
        players.forEach(player => displayPlayer(player)); 
        var button = document.getElementById("selectPlayers");
        button.remove();
        
    }    
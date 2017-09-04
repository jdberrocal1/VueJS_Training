new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []       
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.logTurn(true, 'Player hits Monster for ' + damage);
            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= this.calculateDamage(10, 20);

            this.logTurn(true, 'Player hits Monster hard for ' + damage);

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        heal: function () {
            this.playerHealth = this.playerHealth <= 90 ? this.playerHealth + 10 : 100;
            this.logTurn(true, 'Player heals for 10');
            this.monsterAttacks();
        },
        giveUp: function () {
            this.gameIsRunning = false;
            this.turns = [];
        },
        monsterAttacks: function() {
            var damage = this.calculateDamage(5, 15);
            this.playerHealth -= damage;
            this.logTurn(false, 'Monster hits Player for ' + damage);
            this.checkWin();
        },
        logTurn: function(isPlayer, text) {
            this.turns.unshift({
                isPlayer: isPlayer,
                text: text
            });
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0){
                if(confirm('You lost! New Game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});
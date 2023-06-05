window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1366;
    canvas.height = 657;

    class Shadowdog {
        constructor(game){
            this.game = game;
            this.spriteWidth = 575;
            this.spriteHeight = 523;
            this.frameX = 0;
            this.frameY = 0;
            this.gameFrame = 0;
            this.staggerFrames = 7;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = canvas.width/3;
            this.y = canvas.height/2;
            this.image = document.getElementById('shadowdog');
            this.scale = 0.4;
            shadowdog.cursor = "pointer";
        }
        draw(context){
            //context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth * this.scale, this.spriteHeight * this.scale);
        }
        update(){
            //sprite animation
            if (this.gameFrame % this.staggerFrames == 0){
                if (this.frameX <6) this.frameX++;
                else this.frameX = 0;
            }
            this.gameFrame++;
        }
    }

    class Owlbear {
        constructor(game){
            this.game = game;
            this.spriteWidth = 200;
            this.spriteHeight = 200;
            this.frameX = 0;
            this.frameY = 2;
            this.maxFrame = 30;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = canvas.width/1.5;
            this.y = canvas.height/1.7;
            this.speedX = 0;
            this.speedY = 0;
            this.maxSpeed = 10;
            this.image = document.getElementById('owlbear');
            this.scale = 0.8;
        }
        draw(context){
            //context.fillRect(this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale);
        }
        update(){
            //sprite animation
            if (this.frameX < this.maxFrame){
                this.frameX++;
            } else {
                this.frameX = 0;
            }
        }
    }

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.shadowdog = new Shadowdog(this);
            this.owlbear = new Owlbear(this);
        }
        render(context){
            this.shadowdog.draw(context);
            this.shadowdog.update();
            this.owlbear.draw(context);
            this.owlbear.update();
        }
    }

    const game = new Game(canvas.width, canvas.height);
    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        game.render(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});
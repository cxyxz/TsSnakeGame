import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
class GameControl{
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    direction:string = '';
    isLive=true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);
        this.init()
    }
    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this));
         this.run()
    }
    keydownHandler(event:KeyboardEvent){
        this.direction = event.key

    }
    run() {

        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":

                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":

                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":

                X -= 10;
                break;
            case "ArrowRight":
            case "Right":

                X += 10;
                break;
        };
        this.chekEat(X,Y);
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e:any){
            alert(e.message+' GAME OVER!');
            // 将isLive设置为false
            this.isLive = false;

        }

        this.isLive&&setTimeout(this.run.bind(this),300)

    }
    chekEat(X:number,Y:number){
        if(X === this.food.X&&Y === this.food.Y){
            this.food.change();

            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}
export  default GameControl
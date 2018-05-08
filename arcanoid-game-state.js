(function() {
    function GameState()
    {
        var bricks_list = [
            {'x':0,'y':0.9},      // left-top brick
            {'x':0,'y':0},      // left-bottom brick
            {'x':0.9,'y':0},      // right-bottom brick
            {'x':0.9,'y':0.9},      // right-top brick
            {'x':0.5,'y':0.5},  // middle brick
            {'x':0.7,'y':0.3}   // random brick 
        ];
        // Important: Events are created first!
        this.paddleMoved = new arcanoid.Event
        this.ballMoved = new arcanoid.Event

        this.paddle = new arcanoid.Paddle(this)
        this.brick = new arcanoid.Bricks(bricks_list)
        this.ball = new arcanoid.Ball(this)
    }
    GameState.prototype.next = function(dt)
    {
        if (this.paddle.speed != 0) {
            this.paddle.pos += this.paddle.speed*dt
            this.paddleMoved.raise()
        }
        if (!(this.ball.speed[0] === 0 && this.ball.speed[1] === 0)) {
            this.ball.pos[0] += this.ball.speed[0]*dt
            this.ball.pos[1] += this.ball.speed[1]*dt
            this.ballMoved.raise()
        }
    }
    arcanoid.GameState = GameState
})()

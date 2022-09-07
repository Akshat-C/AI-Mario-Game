img = "";
noseX = 0;
noseY = 0;
marioX = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav")
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	vid = createCapture(VIDEO);
	vid.size(800, 400);
	vid.parent("game_console");

	pn = ml5.poseNet(vid, modelLoaded);
	pn.on("pose", gotPoses);
}

function gotPoses(results)
{
	if (results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function modelLoaded()
{
	console.log("PoseNet model has successfully been loaded");
}

function draw() {
	game()
}







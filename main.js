canvas = new fabric.Canvas("myCanvas")

 by=1;
 bx=1;

bw = 350;
bh = 430;

bo= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		bo = Img;
		bo.scaleToWidth(bw);
		bo.scaleToHeight(bh);
		bo.set({
			top:by,
			left:bx
		});
		canvas.add(bo);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		bx = 1;
		new_image("rr1.png");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png");
	}
	
}


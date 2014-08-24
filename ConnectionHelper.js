var clickables = []

var ConnectionHelper = {
	init : function(ctx){
		for(var connectionId in Connections){
			var connection = Connections[connectionId];
			if(connection.children){
				for (var i = 0; i < connection.children.length; i++) {
					var child = connection.children[i];
					Connections[child].parent = connection;
				}
			}
		}
		ConnectionHelper.ctx = ctx;
		ConnectionHelper.render();
	},
	solve : function(id){
		var c = Connections[id];
		if(c.onsolved && !c.solved)
			c.onsolved();
		c.solved = true;
		console.log("making " + id+ " clickable");
		clickables.push(c);
		if(c.parent){
			ConnectionHelper.solveIfChildrenAreSolved(c.parent);
		}

		//re-render
		ConnectionHelper.render();
	},
	cycleHighlight : function() {
		var top = clickables.shift();
		console.log(clickables);
		console.log(top);
		clickables.push(top);
		ConnectionHelper.render();	
	},
	solveIfChildrenAreSolved : function(parent){
		if(parent.children){
			for (var i = 0; i < parent.children.length; i++) {
				var childId = parent.children[i];
				var child = Connections[childId];
				if(!child.solved){
					parent.solved = false;
					return;
				}
			}
			console.log("parent solved for some reason.");
			if(parent.onsolved && !parent.solved)
				parent.onsolved();
			parent.solved = true;
			clickables.push(parent);
			if(parent.parent)
				ConnectionHelper.solveIfChildrenAreSolved(parent.parent);	
		}else{
			//solve if no children?
			parent.solved = true;
		}
	},
	drawALine : function(x1, y1, x2, y2){
		ctx.beginPath();
		ctx.arc(x1, y1, ctx.lineWidth, 0, 2*Math.PI);
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(x2, y2, ctx.lineWidth, 0, 2*Math.PI);
		ctx.fill();
	},
	render : function(){
		var ctx = ConnectionHelper.ctx;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, 500, 600);
		for(var cid in Connections){
			var connection = Connections[cid];
			if(!connection.solved){
				var realx1 = connection.coords[0] * 50 + 30;
				var realy1 = connection.coords[1] * 50 + 30;
				var realx2 = connection.coords[2] * 50 + 30;
				var realy2 = connection.coords[3] * 50 + 30;
				
				ctx.fillStyle = "gray";
				ctx.strokeStyle = "gray";
				ctx.lineWidth = 10;

				ConnectionHelper.drawALine(realx1, realy1, realx2, realy2);
			}
		}
		for(var cid in Connections){
			var connection = Connections[cid];
			if(connection.solved){
				var realx1 = connection.coords[0] * 50 + 30;
				var realy1 = connection.coords[1] * 50 + 30;
				var realx2 = connection.coords[2] * 50 + 30;
				var realy2 = connection.coords[3] * 50 + 30;
				
				ctx.fillStyle = "green";
				ctx.strokeStyle = "green";
				ctx.lineWidth = 10;
		
				ConnectionHelper.drawALine(realx1, realy1, realx2, realy2);
			}
		}
		if(clickables[clickables.length-1]){
			var connection = clickables[clickables.length-1];
			var realx1 = connection.coords[0] * 50 + 30;
			var realy1 = connection.coords[1] * 50 + 30;
			var realx2 = connection.coords[2] * 50 + 30;
			var realy2 = connection.coords[3] * 50 + 30;
			
			ctx.fillStyle = "white";
			ctx.strokeStyle = "white";
			ctx.lineWidth = 15;
			ConnectionHelper.drawALine(realx1, realy1, realx2, realy2);

			ctx.fillStyle = "green";
			ctx.strokeStyle = "green";
			ctx.lineWidth = 10;
			ConnectionHelper.drawALine(realx1, realy1, realx2, realy2);
		}
		//text at the bottom
		if(clickables[clickables.length-1])
			ctx.fillText(clickables[clickables.length-1].tooltip,30,550);
	}
};

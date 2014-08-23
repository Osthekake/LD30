
var clickables = new Array(20);
for (var i = 0; i < clickables.length; i++) {
	clickables[i] = new Array(20);
};

var highlighted = undefined;

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
		console.log("Solved " + id)
		var c = Connections[id];
		console.log(c);
		c.solved = true;
		highlighted = c;
		if(c.parent){
			ConnectionHelper.solveIfChildrenAreSolved(c.parent);
		}

		//re-render
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
			parent.solved = true;
			highlighted = parent;
			if(parent.parent)
				ConnectionHelper.solveIfChildrenAreSolved(parent.parent);	
		}else{
			//solve if no children?
			parent.solved = true;
		}
	},
	render : function(){
		var ctx = ConnectionHelper.ctx;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, 400, 400);
		for(var cid in Connections){
			var connection = Connections[cid];
			if(!connection.solved){
				var realx1 = connection.coords[0] * 50 + 30;
				var realy1 = connection.coords[1] * 50 + 30;
				var realx2 = connection.coords[2] * 50 + 30;
				var realy2 = connection.coords[3] * 50 + 30;
				var x = connection.coords[0];
				var y = connection.coords[1];
				clickables[x][y] = connection;

				ctx.fillStyle = "gray";
				ctx.strokeStyle = "gray";

				ctx.lineWidth = 10;
				ctx.beginPath();
				ctx.arc(realx1, realy1, 15, 0, 2*Math.PI);
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(realx1, realy1);
				ctx.lineTo(realx2, realy2);
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(realx2, realy2, 15, 0, 2*Math.PI);
				ctx.fill();
			}
		}
		for(var cid in Connections){
			var connection = Connections[cid];
			if(connection.solved){
				var realx1 = connection.coords[0] * 50 + 30;
				var realy1 = connection.coords[1] * 50 + 30;
				var realx2 = connection.coords[2] * 50 + 30;
				var realy2 = connection.coords[3] * 50 + 30;
				var x = connection.coords[0];
				var y = connection.coords[1];
				clickables[x][y] = connection;

				if(connection == highlighted){
					ctx.fillStyle = "white";
					ctx.strokeStyle = "white";
					ctx.lineWidth = 15;
					ctx.beginPath();
					ctx.arc(realx1, realy1, 15, 0, 2*Math.PI);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(realx1, realy1);
					ctx.lineTo(realx2, realy2);
					ctx.stroke();
					ctx.beginPath();
					ctx.arc(realx2, realy2, 15, 0, 2*Math.PI);
					ctx.stroke();
				}
				ctx.fillStyle = "green";
				ctx.strokeStyle = "green";
		
				ctx.lineWidth = 10;
				ctx.beginPath();
				ctx.arc(realx1, realy1, 15, 0, 2*Math.PI);
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(realx1, realy1);
				ctx.lineTo(realx2, realy2);
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(realx2, realy2, 15, 0, 2*Math.PI);
				ctx.fill();
			}
		}
		//text at the bottom
		if(highlighted)
			ctx.fillText(highlighted.tooltip,30,350);
	}
};

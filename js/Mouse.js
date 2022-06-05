function mouse() {
	Clrs = new Array('ff0000', '00ff00', 'ffffff', 'ff00ff', 'ffa500', 'ffff00', '00ff00', 'ffffff', 'ff00ff')
	var speed = 1;
	var RunTime = 0;
	var cntr = 0;
	var xcntr = 100;
	var Nslayers;
	var pulse = 25;
	var onClrs;
	var Xpos = 421;
	var Ypos = 231;
	var _y;
	if (document.layers) {
		window.captureEvents(Event.MOUSEMOVE);

		function xFollowMouse(evnt) {
			Xpos = evnt.pageX;
			Ypos = evnt.pageY;
		}
		window.onMouseMove = xFollowMouse;
		document.write('<layer name="a0" left=10 top=10 bgcolor="#ff0000" clip="0,0,2,2"></layer>' +
			'<layer name="a1" left=10 top=10 bgcolor="#00ff00" clip="0,0,2,2"></layer>' +
			'<layer name="a2" left=10 top=10 bgcolor="#ffffff" clip="0,0,2,2"></layer>' +
			'<layer name="a3" left=10 top=10 bgcolor="#ffa500" clip="0,0,2,2"></layer>' +
			'<layer name="a4" left=10 top=10 bgcolor="#ff00ff" clip="0,0,2,2"></layer>' +
			'<layer name="a5" left=10 top=10 bgcolor="#8888ff" clip="0,0,2,2"></layer>' +
			'<layer name="a6" left=10 top=10 bgcolor="#fff000" clip="0,0,2,2"></layer>');
	} else if (document.all) {
		function FollowMouse() {
			Xpos = document.body.scrollLeft + event.x;
			Ypos = document.body.scrollTop + event.y;
		}
		document.onmousemove = FollowMouse;
		document.write('<div id="ieDiv" style="position:absolute;top:0px;left:0px">' +
			'<div id="c" style="position:relative">' +
			'<div style="position:absolute;top:0px;left:0px;width:2px;height:2px;background:#ff0000;font-size:2px"></div>' +
			'<div style="position:absolute;top:0px;left:0px;width:2px;height:2px;background:#00ff00;font-size:2px"></div>' +
			'<div style="position:absolute;top:0px;left:0px;width:2px;height:2px;background:#ffffff;font-size:2px"></div>' +
			'<div style="position:absolute;top:0px;left:0px;width:2px;height:2px;background:#ffa500;font-size:2px"></div>' +
			'<div style="position:absolute;top:0px;left:0px;width:2px;height:2px;background:#ff00ff;font-size:2px"></div>' +
			'<div style="position:absolute;top:0px;left:0px;width:2px;height:2px;background:#8888ff;font-size:2px"></div>' +
			'<div style="position:absolute;top:0px;left:0px;width:2px;height:2px;background:#fff000;font-size:2px"></div>' +
			'</div>' +
			'</div>');
	}

	function sv2() {
		if (document.layers) {
			for (i = 0; i < 7; i++) {
				Nslayers = "a" + i;
				document.layers[0].top = Ypos + cntr * Math.cos((RunTime + i * 4.5) / 5);
				document.layers[0].left = Xpos + cntr * Math.sin((RunTime + i * 4.5) / 5);
				var randCol = Math.round(Math.random() * 8);
				document.layers[0].bgColor = Clrs[randCol];
			}
			cntr += 1;
			RunTime += speed;
			stp = setTimeout('sv2()', 10);
			if (cntr >= 100) {
				cntr = 100;
				speed = 2.5;
				for (i = 0; i < 7; i++) {
					Nslayers = "a" + i;
					document.layers[Nslayers].top = Ypos + cntr * Math.cos((RunTime - 100) * i / 90);
					document.layers[Nslayers].left = Xpos + cntr * Math.sin((RunTime - 100) * i / 90);
				}
			}
			if (RunTime > 182) {
				speed = 0.5;
				for (i = 0; i < 7; i++) {
					Nslayers = "a" + i;
					document.layers[Nslayers].top = Ypos + xcntr * Math.cos(((RunTime - 182) + i * 4.5) / 5) * Math.cos((
						RunTime - 182) / 5);
					document.layers[Nslayers].left = Xpos + xcntr * Math.sin(((RunTime - 182) + i * 4.5) / 5);
				}
			}
		} else if (document.all) {
			for (i = 0; i < ieDiv.all.c.all.length; i++) {
				var randCol = Math.round(Math.random() * 8);
				ieDiv.all.c.all[0].style.background = Clrs[randCol];
				ieDiv.all.c.all[0].style.top = Ypos + cntr * Math.cos((RunTime + i * 4.5) / 5);
				ieDiv.all.c.all[0].style.left = Xpos + cntr * Math.sin((RunTime + i * 4.5) / 5);
			}
			cntr += 1;
			RunTime += speed;
			window.status = RunTime;
			stp = setTimeout('sv2()', 10);
			if (cntr >= 100) {
				cntr = 100;
				speed = 2.5;
				for (i = 0; i < ieDiv.all.c.all.length; i++) {
					ieDiv.all.c.all[i].style.top = Ypos + cntr * Math.cos((RunTime - 100) * i / 90);
					ieDiv.all.c.all[i].style.left = Xpos + cntr * Math.sin((RunTime - 100) * i / 90);
				}
			}
			if (RunTime > 182) {
				speed = 0.5;
				for (i = 0; i < ieDiv.all.c.all.length; i++) {
					ieDiv.all.c.all[i].style.top = Ypos + xcntr * Math.cos(((RunTime - 182) + i * 4.5) / 5) * Math.cos((
						RunTime - 182) / 5);
					ieDiv.all.c.all[i].style.left = Xpos + xcntr * Math.sin(((RunTime - 182) + i * 4.5) / 5);
				}
			}
		}
		if (RunTime > 210) {
			xcntr -= 10;
		}
		if (document.layers)
			_y = -window.innerWidth - 90;
		else if (document.all)
			_y = -document.body.clientWidth - 90;
		if (xcntr <= _y) {
			RunTime = 0;
			speed = 1;
			cntr = 0;
			xcntr = 100;
		}
	}
	sv2()
}
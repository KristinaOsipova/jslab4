	function skaz()
	{
		var name=document.getElementById('name').value;
		var hobby=document.getElementById('hobby').value;
		var friend=document.getElementById('friend').value;
		var gift=document.getElementById('gift').value;
		
		
		var win=window.open("","","width=400,height=500");
		win.document.open();			
		win.document.write("<h1>"+name+" и "+gift+"</h1><hr>");
		
		win.document.write("В одном лесу жила маленькая " + name + ", которая очень любила " + hobby +
			" чудесные песни. У нее так хорошо получалось, что весь лес собирался послушать ее! " +
			"От сороки она узнала, что у людей принято дарить " + gift + " любимым исполнителям. А " + 
			gift + " она любила так же сильно, как и петь. Долго грустила " + name + 
			". Но, однажды, после очередного импровизированного концерта, " + friend + " подлетел к " + name +
			" и подарил ей... " + gift + "!	Уж он то был истинным джентельменом! " + name + " была невероятно счастлива!!!<br>");
		
		
		str ='<input type="button" value="Закрыть"'
		+'onClick="window.close();">';
		win.document.write(str);
		win.document.close();
	}

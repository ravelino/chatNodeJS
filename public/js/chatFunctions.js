var Chat = {
	
	connect : function(){
	
		var chat = io.connect();
		chat.on('connect', function() {
		  $('#mensagens').val('');
		  chat.emit('set nick', prompt("Digite seu nome", ""));
	  
		  chat.on('mensagem', function(mensagem) {
			$('#mensagens').append("[" + mensagem.hora + "] -> " + mensagem.nome + ":" + mensagem.texto + "<br/>");
			window.scrollTo(0, document.body.scrollHeight);
		  });

		  chat.on('ready', function() {
			$('#enviar').click(function() {
			   chat.emit('mensagem', $('#mensagem').val());
			   $('#mensagem').val('');
			});
		  });
		});
		
	}
}


        


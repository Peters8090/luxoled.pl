jQuery(function($)
		{
    
			$.scrollTo(0);
			
			$('#link1').click(function() { $.scrollTo($('head'), 500); });
			$('#link2').click(function() { $.scrollTo($('#o-nas'), 500); });
			$('#link3').click(function() { $.scrollTo($('#oferta'), 500); });
			$('#link4').click(function() { $.scrollTo($('#dla-kogo'), 500); });
            $('#link5').click(function() { $.scrollTo($('#footer'), 500); });
		}
		);

		$(window).scroll(function()
		{
			if($(this).scrollTop()>300) $('.scrollup').fadeIn();
			else $('.scrollup').fadeOut();
		}
                         
		);
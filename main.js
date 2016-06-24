$(document).ready(function() {
	


	function resizeo(){
		var width = $('.container').innerWidth();
		var height = $('.container').innerHeight();


		ddd = (width * 480) / 720;
		$('.container').css('height', ddd);



		if( $(window).innerHeight() <= 480 ){
			$('.container').css('height', $(window).innerHeight() );

			ddd = (height * 720) / 480;
			$('.container').css('width', ddd);
		}

	}
	
	resizeo();

	$(window).resize(function(){
		resizeo();
	 	slider('#slide_1');
	 	slider('#slide_2');
	 	slider('#slide_3');
	});



 	
 	slider('#slide_1');
 	slider('#slide_2');
 	slider('#slide_3');


	function slider( id ){
		var slider = $(id);
		
		var slider_position = 0;
		var slider_length = slider.find('.image img').length;
		var imageHeight = slider.find('.image img').innerHeight();
		var imageWidth = slider.find('.image img').innerWidth();


		sliderImgPosition();
		navPosition();

		slider.css('height', $('.container').innerHeight() );
		slider.css('width', slider.find('.image img').innerWidth() );


		slider.find('.bottom').click(function(){
			numSlide('bottom');
		});
		
		slider.find('.top').click(function(){
			numSlide('top');
		});


		function numSlide( where ){
			if( where == 'bottom' && slider_position < (slider_length - 1) ){
				slider_position ++;	
			}
			if( where == 'top' && slider_position > 0 ){
				slider_position --;
			}
			console.log(slider_position);			
			goToSlide(slider_position);

			slider.attr('data-slide', slider_position +1);
			tester();
		}

		function goToSlide( slide_num ){
			css_top = imageHeight * slide_num;

			slider.find('.image').css('top', -css_top);
		}

		function sliderImgPosition(){
			i = 0;
			
			slider.find('.image').find('img').each(function(){
				css_top = slider.innerHeight() * i;
				$(this).css('top', css_top);
				$(this).css('height', $('.container').innerHeight() );
				i++;
			});
		}

		function navPosition(){
			css_left = ( slider.find('.image img').innerWidth() / 2 ) - ( slider.find('.top img').innerWidth()/2 ) ;
			slider.find('nav img').css('left', css_left);
		}

		function tester(){

			if( $('#slide_1').attr('data-slide') == 3 && $('#slide_2').attr('data-slide') == 3 && $('#slide_3').attr('data-slide') == 3 ){
				
				setTimeout(function(){
					$('.blink').css('top', '800px');
				}, 500);

				setTimeout(function(){
					window.parent.location.href = "http://delivery.way2traffic.com/campaign=20457/click/195264/click.html?pb=12962&pc=588834&rd=TIMESTAMP"
				}, 1500);

			}
		}

	}



});//end document ready
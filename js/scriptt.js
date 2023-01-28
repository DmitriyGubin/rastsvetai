// window.addEventListener("load",function(){
	
	Animation();
	funcTub('#sec_4 .tab-plus-block', 'active-tab');
	Switch('#sec_5 div div a', 'active');
	Scroll_to_element('#headd a');

	document.querySelector('#ipoteka-order').addEventListener("click", function(){
		document.querySelector('#pop-up-title').innerHTML = 'Заявка на ипотеку';
		Show_PopUp_Order();
	});
	document.querySelector('#choose-apart').addEventListener("click", function(){
		document.querySelector('#pop-up-title').innerHTML = 'Подбор квартиры';
		Show_PopUp_Order();
	});
	document.querySelector('#close').addEventListener("click", Hide_PopUp_Order);
	$("#pop-up-phone").mask("+7(999) 999-9999");
	
// });

function Switch(selector, modify_class)
{
	var elements = document.querySelectorAll(selector);
	for(let item of elements)
	{
	   item.addEventListener("click", function(){

	        for(let itemm of elements)
	        {
	            if(itemm.classList.contains(modify_class))
	            {
	                itemm.classList.remove(modify_class);
	            }
	        }

		        item.classList.add(modify_class);

		   });
	}
}

function funcTub(selector, active_class)
{
	var elements = document.querySelectorAll(selector);
	for(let item of elements)
	{
	   item.querySelector('.box_plus').addEventListener("click", function(){

	   		var tab = item.querySelector('.tab');
	   		var plus = item.querySelector('.box_plus a');
	   		if(tab.classList.contains(active_class))
	   		{
	   			tab.classList.remove(active_class);
	   			plus.innerHTML = '+';
	   		}
	   		else
	   		{
	   			tab.classList.add(active_class);
	   			plus.innerHTML = '-';
	   		}
		});
	}
}

function Animation()
{
	$.fn.animate_Text = function() {
		var string = this.text();
		return this.each(function(){
			var $this = $(this);
			$this.html(string.replace(/./g, '<span class="new">$&</span>'));
			$this.find('span.new').each(function(i, el){
				setTimeout(function(){ $(el).addClass('div_opacity'); }, 100 * i);
			});
		});
	};
	$('#animatee').show();
	$('#animatee').animate_Text();
}

function Scroll_to_element(selector)
{
	const smoothLink = document.querySelector(selector);
	smoothLink.addEventListener('click', function (e) 
	{
		e.preventDefault();
		const id = smoothLink.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}

function Show_PopUp_Order()
{
	document.querySelector('.send_order').classList.add('show_pop_up_order');
}

function Hide_PopUp_Order()
{
	document.querySelector('.send_order').classList.remove('show_pop_up_order');

	document.querySelector('#form-content').classList.remove('hide');
	document.querySelector('#succes_order').classList.remove('show');
}



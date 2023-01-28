// $(document).ready(function(){

	$("#for_send").on("click",function(){

        var err=0;
        
        var arr = ['#pop-up-name',
        '#pop-up-phone'
        ];

        err = Validate(arr,'pop-up-phone');

        if (err == 0)
        {
            var pop_up_title = document.querySelector('#pop-up-title').innerHTML;
            if(pop_up_title == 'Заявка на ипотеку')
            {
               var price = $("#apartment_pricee").val();
               var first_money  = $("#initial_feee").val();
               var time  = $("#credit_termm").val();
               var payment = ($("#resultt").html()).replace(/&nbsp;/g, ' ');
            }
            else
            {
               var price = '';
               var first_money  = '';
               var time  = '';
               var payment = '';
            }

            if(pop_up_title == 'Подбор квартиры')
            {
                var rooms;
                var elements = document.querySelectorAll('#sec_5 .boxxx');
                for(let item of elements)
                {
                    if(item.classList.contains('active'))
                    {
                        rooms = item.innerHTML;
                    }
                }
                var room_price = $("#right-val").val();
            }
            else
            {
            	var rooms = '';
            	var room_price = '';
            }

            $.ajax({
                type: "POST",
                url: 'send-order.php',
                data: {
                    'name': $("#pop-up-name").val(),
                    'phone': $("#pop-up-phone").val(),
                    'price': price,
                    'first_money': first_money,
                    'time': time,
                    'payment': payment,
                    'rooms': rooms,
                    'room_price': room_price,
                    'title': pop_up_title                         			
                },
                dataType: "json",
                success: function(data){

                    if (data.status == true)
                    {
                        $("#pop-up-name").val('');
                        $("#pop-up-phone").val('');

                        $("#form-content").addClass("hide");
                        $("#succes_order").addClass("show");
                    }
                }
            });
        }

    });
// });


function Validate(arr,phone_id)
{
    var err=0;

    for (let item of arr)
    {
       var bool;

       if($(item).attr("id") == phone_id)
       {
            bool = (($(item).val()).length != 16);
        }
        else 
        {
            bool = ($(item).val() == '');
        }

        if (bool)
        {
            err++;
            $(item).addClass("hasError");
        } 
        else 
        {
            $(item).removeClass("hasError");
        }
    }

return err;
}
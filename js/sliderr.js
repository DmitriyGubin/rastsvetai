function Change_Input(input_id,slider_id,unit)
{
  $(input_id).change(function () {
    if($(input_id).hasClass('errorr'))
    {
      $(input_id).removeClass('errorr');
    }
    var val = $(input_id).val();
    var reg = new RegExp(unit);
    val = val.replace(reg, '');
    val = Number(val.replace(/\s/g, ''));
    $(slider_id).slider("value",val);

    var a = new Intl.NumberFormat("ru").format(val);
    $( input_id ).val(a + " " + unit);

    var check = $( input_id ).val();
    if(check.indexOf('не число') != -1)
    {
      $(input_id).val('введите корректное значение');
      $(input_id).addClass("errorr");
      return;
    }
    
    calc();
  }); 
}

function calc()
{
  var f_1 = $( "#apartment_pricee" ).val();
  var f_2 = $('#initial_feee').val();
  var f_3 = $('#credit_termm').val();
  funcQuery(f_1,f_2,f_3);
}


// $( function() {

  Change_Input('#apartment_pricee','#slider_1','₽');

  $( "#slider_1" ).slider({
    range: "min",
    value: 3000000,
    step: 100000,
    min: 100000,
    max: 20000000,
    slide: function( event, ui ) {
            var a = new Intl.NumberFormat("ru").format(ui.value);
            $( "#apartment_pricee" ).val(a + " ₽");
            calc();
          }
        });
  var b = new Intl.NumberFormat("ru").format($( "#slider_1" ).slider( "value" ));
  $( "#apartment_pricee" ).val(b + " ₽");
// });


// $( function() {

  Change_Input('#initial_feee','#slider_2','₽');
  
  $( "#slider_2" ).slider({
    range: "min",
    value: 2000000,
    step: 100000,
    min: 100000,
    max: 20000000,
    slide: function( event, ui ) {
            var a = new Intl.NumberFormat("ru").format(ui.value);
            $( "#initial_feee" ).val(a + " ₽");
            calc();
          }
        });
  var b = new Intl.NumberFormat("ru").format($( "#slider_2" ).slider( "value" ));
  $( "#initial_feee" ).val(b + " ₽");
// });


// $( function() {

  Change_Input('#credit_termm','#slider_3','лет');

  $( "#slider_3" ).slider({
    range: "min",
    value: 10,
    step: 1,
    min: 1,
    max: 50,
    slide: function( event, ui ) {
            var a = new Intl.NumberFormat("ru").format(ui.value);
            $( "#credit_termm" ).val(a + " лет");
            calc();
          }
        });
  var b = new Intl.NumberFormat("ru").format($( "#slider_3" ).slider( "value" ));
  $( "#credit_termm" ).val(b + " лет");

// });


function funcQuery(f_1,f_2,f_3)
{
  var price = f_1;
  var vznos = f_2;
  var time = f_3;

  price = price.replace(/₽/, '');
  price = price.replace(/\s/g, '');
  price = Number(price);

  vznos = vznos.replace(/₽/, '');
  vznos = vznos.replace(/\s/g, '');
  vznos = Number(vznos);

  time = time.replace(/лет/, '');
  time = time.replace(/\s/g, '');
  time = Number(time);


  if (price == '' || vznos == '' || time == '')
  {
    return;
  }

  var payment = calculate_ipoteka(price,vznos,time,4);
  payment = new Intl.NumberFormat("ru").format(payment);
  payment = payment + " ₽";
  
  document.querySelector("#resultt").innerHTML = payment; 
}

function calculate_ipoteka(price,initial_fee,time,percent)
{ 
  time = time*12; //Срок ипотеки в месяцах
  interest_rate = percent / 12 /100; //Месячная процентная ставка
  total_rate = (1 + interest_rate) ** time; //Общая ставка
  monthly_payment = (price - initial_fee) * interest_rate * total_rate / (total_rate - 1);//Ежемесячный платеж
  return Math.round(monthly_payment);
}

// $( function() {

  $( "#slider_4" ).slider({
    range: "min",
    value: 10,
    step: 0.1,
    min: 2,
    max: 20,
    slide: function( event, ui ) {
            a = (ui.value).toFixed(1);
            a = a.replace(/\./, ',');
            $( "#right-val" ).val("до " + a);
          }
        });
 
  b = ($( "#slider_4" ).slider( "value" )).toFixed(1);
  b = b.replace(/\./, ',');
  $( "#right-val" ).val("до " + b);
// });
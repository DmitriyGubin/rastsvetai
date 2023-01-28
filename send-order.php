<?php

$arResult = array('status' => false);

foreach ($_POST as $key => $value) 
{
    $_POST[$key] = trim($value);
}

$date = date_create();
//date_modify($date, '4 hour');
$date = date_format($date, 'd.m.Y H:i:s');

$to = 'testgubin@mail.ru';

$args     = array(
	'Имя' => $_POST['name']??'',
	'Телефон' => $_POST['phone']??'',
	'Стоимость квартиры' => $_POST['price']??'',
	'Первоначальный взнос' => $_POST['first_money']??'',
	'Срок кредита' => $_POST['time']??'',
	'Ежемесячный платеж' => $_POST['payment']??'',
	'Количество комнат' => $_POST['rooms']??'',
	'Cтоимость квартиры, млн' => $_POST['room_price']??'',
	'Страница отправки заявки' => $_SERVER['HTTP_REFERER']
	);

$body = '';
foreach ( $args as $key => $value ) 
{
	if ( ! empty( $value ) ) 
	{
		$body .= $key . ' : ' . $value . '.' . "\n";
	}
}

$headers = 'From: Rastsvetai-site@example.com';

if($_POST['title'] == 'Заявка на ипотеку')
{
	$subject = 'Новая заявка на ипотеку IT от '.$date;
}
else if($_POST['title'] == 'Подбор квартиры')
{
	$subject = 'Новая заявка на подбор квартиры от '.$date;
}

if ( mail( $to, $subject, $body, $headers ) )
{
	$arResult['status'] = true;
}

echo json_encode($arResult);







// $(document).ready ->
//   console.log('hello')
//   $("a[rel~=popover], .has-popover").popover()
//   $("a[rel~=tooltip], .has-tooltip").tooltip()


$(document).ready(function(){

	$('[data-toggle=popover].has-popover').popover({ 
		trigger:'hover',
		html: true, 
		content: function() {
			return $(this).next('#popover_content_wrapper').html();
		}
	});


	var paymentCalc = [
	'<img src="/assets/Amortization-Formular.gif">',
	'<ul>',
	'<li>A = payment Amount per period</li>',
	'<li>P = initial Principal</li>',
	'<li>r = interest rate per period</li>',
	'<li>n = total number of payments</li>',
	'</ul>'].join('');

	$('[data-toggle=popover].paymentCalc').popover({ 
		trigger:'hover',
		html: true, 
		title: 'Calculating the Payment Amount per Period',
		content: paymentCalc
	}); 

	var interestCalc = [
	'<img src="/assets/cal_rate.gif">',
	'<ul>',
	'<li>r = rate per payment period</li>',
	'<li>i = nominal annual interest rate</li>',
	'<li>n = number of compounding periods per year</li>',
	'<li>p = number of payment periods per year</li>',
	'</ul>'].join('');

	$('[data-toggle=popover].interestCalc').popover({ 
		trigger:'hover',
		html: true, 
		title: 'Calculating the Rate Per Period',
		content: interestCalc
	});           
});
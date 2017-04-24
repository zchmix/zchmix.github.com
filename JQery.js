
$(document).ready(function(){
    $(".showimg").hide();
	$(".imgbackground").hide();
	$(".ui-part1-picture").click(function(){
		$(".showimg").attr("src",$(this).children('img').attr("src"));
		$(".showimg").show();
		$(".imgbackground").show();
	});
	$(".imgbackground").click(function(){
		$(".showimg").hide();
		$(".imgbackground").hide();
	});
});

/*-----------------------------------------------*/
$(document).ready(function() {
	$(".ui-part2 tr td:eq(0)").css("background-color","rgb(192,192,192)");
	$("#num2").hide();
	$("#num3").hide();
	$(".ui-part2 tr td:eq(0)").click(function(){
		$(".ui-part2 tr td:eq(0)").css("background-color","rgb(192,192,192)");
		$(".ui-part2 tr td:eq(1)").css("background-color","white");
		$(".ui-part2 tr td:eq(2)").css("background-color","white");
		$("#num1").show();
		$("#num2").hide();
		$("#num3").hide();
	});
	$(".ui-part2 tr td:eq(1)").click(function(){
		$(".ui-part2 tr td:eq(1)").css("background-color","rgb(192,192,192)");
		$(".ui-part2 tr td:eq(0)").css("background-color","white");
		$(".ui-part2 tr td:eq(2)").css("background-color","white");
		$("#num2").show();
		$("#num1").hide();
		$("#num3").hide();
	});
	$(".ui-part2 tr td:eq(2)").click(function(){
		$(".ui-part2 tr td:eq(2)").css("background-color","rgb(192,192,192)");
		$(".ui-part2 tr td:eq(1)").css("background-color","white");
		$(".ui-part2 tr td:eq(0)").css("background-color","white");
		$("#num3").show();
		$("#num2").hide();
		$("#num1").hide();
	});
});
/*--------------------------------------------------------------------*/
$(document).ready(function() {
	function inorder(index)
	{
		$(this).find('.ui-li-table-order').text(index+1);
	}
	function del() 
	{
		$(this).parents(".ui-li").remove();
		$("li").each(inorder);
	}
	$("li").each(inorder);
	$('.ui-li-table-del').bind('click',del);
	$(".add").click(function() {
		$("ul").append("<li class='ui-li'></ul>");
		$("li:last").append("<table class='ui-li-table'></table>");
	    $("li:last").children('.ui-li-table').append("<tr class='ui-tr'></tr>");
		$("li:last").find('.ui-tr').append("<td class='ui-li-table-order'></td>");
		$("li:last").find('.ui-tr').append("<td class='ui-li-table-content'></td>");
		$("li:last").find('.ui-tr').append("<td class='ui-li-table-del'>Delete</td>");
		$("li").each(inorder);
		$('.ui-li-table-del').bind('click',del);
		});
	$("li").each(inorder);
    $('.ui-li-table-del').bind('click',del);
});
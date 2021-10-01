$("#creer").click(function(){
  var l = parseInt($('#ligne').val());
  var c = parseInt($('#colon').val());/*
-----------  my function
  for (var i = 0; i < l; i++) {
    $("table").append("<tr></tr>");
  }
  for (var j = 0; j < c; j++) {
    $("tr").append("<td></td>");
    $("td").text((i+1)+" "+(j+1));
  }*/
    $("table").empty();
  if (isNaN(l)||isNaN(c)) {
    alert("errer");
  }else {

  mes="";
  for (var i = 0; i < l; i++) {
    mes+="<tr>";
    for (var j = 0; j < c; j++) {
      mes+="<td>"+(i+1)+"."+(j+1)+"</td>";
    }
    mes+="</tr>";
  }
  $("table").append(mes);
}
});
$("tr").click(function(){
  if(!($(this).hasClass("table-primary"))){
    $(this).addClass("table-primary");
  }else {
    $(this).removeClass("table-primary");
  }

});

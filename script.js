

$("input").change(function(){
    var inp = $(this).val()
   $("ul").append(`<li>${inp} <i class="fa-solid fa-pencil"></i> <i class="fa-solid fa-trash"></i></li>`)
   $(this).val('')
})

$('ul').on("click",".fa-trash",function(){
$(this).parent('li').fadeOut(2000)
 })

$('ul').on("click", "fa-pencile",function(){
    $(this).parent('li').toggleClass('checked')
})
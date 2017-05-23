$(document).ready(function(){

    // $(".title").mouseover(function(){
        
    // })

    $("ul").click( function(e){
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
        }
    })
    
    $(".add").on("click", function () {

        var todoText = $("#todo-input").val();
        
        if (!todoText){
             alert("Enter something");
        } else {
            var li = $("<li></li>");
            li.append(todoText);
            var close =  $("<span class='close'>x</span>");
            li.append(close);
            $("#todo-input").val("");
            $("#list").append(li);

            $(".close").each(function(){
                $(this).click(function(){
                    $(this).parent().remove();
                })
            })
        }
    });
})
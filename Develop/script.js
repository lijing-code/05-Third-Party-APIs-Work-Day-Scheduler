// save reference to important DOM elements
var currentDay = $('#currentDay');

// Display the time on top of the calender
var today = moment().format('dddd, MMMM Do');
currentDay.text(today);

//Add background for each textarea with different class
var rightnow = moment().hours();

$('.time-block').each(function(){
    var textareaEl = $(this).children().eq(1);
    if ($(this).attr("id") < rightnow){
        textareaEl.addClass('past');
    }else if ($(this).attr("id") == rightnow){
        textareaEl.removeClass('past');
        textareaEl.addClass('present');
    }else{
        textareaEl.removeClass('past');
        textareaEl.removeClass('present');
        textareaEl.addClass('future');
    }
});

//timeblocks with event list column with save button
var saveBtnEl = $(".btn");
var schedulerRecord = ['','','','','','','','',''];

$(".btn").each(function(){
    var textArea = $(this).siblings().eq(1);
    var i = $(this).parent().attr("id")-9;
    $(this).on("click",function(event){
        event.preventDefault();
        schedulerRecord[i] = textArea.val().trim();
        localStorage.setItem("schedulerRecord",JSON.stringify(schedulerRecord));    
    })    
})

//localStorage express on the page (still show on the page after refresh)

function init(){
    var showSchedule = JSON.parse(localStorage.getItem("schedulerRecord"));
    $('.description').each(function(){
        var i = $(this).parent().attr("id")-9;
        $(this).text(showSchedule[i]);
    })
}

init();

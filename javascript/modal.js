$(document).ready(()=>{
   //open the modal text
    $('#open').click(()=>{
        $('.modal').css('display','flex')
    })//close the modal text
    $('#close').click(()=>{
        $('.modal').css('display','none')
    })//closes modalby clicking close
    $(document).click((e)=>{
        if(e.target == document.getElementsByClassName('modal')[0]){
            $('.modal').css('display','none')
        }
    })
})
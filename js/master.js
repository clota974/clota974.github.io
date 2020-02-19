$(()=>{
    $("body").on("mousemove", (ev)=>{

        $(".cursor").css({
            top: ev.clientY,
            left: ev.clientX
        })
    })
})
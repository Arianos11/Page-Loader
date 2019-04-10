var loader_number = 1;
var preloader_number = 1;


window.onload = ()=>{
        $(`.loader-${loader_number}`).addClass('complete');
        setTimeout(()=>{
            $(`.preloader-${preloader_number}`).addClass('complete');
            setTimeout(()=>{
                $(`.preloader-${preloader_number}`).css('display', 'none');
            }, 1000);
        }, 300);
}; 
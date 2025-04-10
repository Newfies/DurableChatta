document.addEventListener('DOMContentLoaded', () => {
    const msg = document.querySelector('.messages');
    var canHideMSGs = false;

    document.addEventListener('keydown', (event) => {
        if (event.key === '~') {
            window.close();
            window.location("https://mail.google.com/mail/u/0/");
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            if (canHideMSGs == true){
                event.preventDefault();

                msg.remove();
            }
        }
    });

    msg.addEventListener('mouseenter', function(){
        canHideMSGs = true;
    });

    msg.addEventListener('mouseleave', function(){
        canHideMSGs = false;
    });


});
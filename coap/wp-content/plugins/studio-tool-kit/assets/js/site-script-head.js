class SpwLgpd
{

    constructor()
    {
        // seleciona os elementos
        this.storage = localStorage.spw_lgpd_storage ?? false;
        this.notice = document.querySelector('.lgpd-notice');
        this.popup = document.querySelector('#lgpd-pop');
        this.btn_privacy_policy = document.querySelector('.lgpd-privacy-policy');
        this.btn_close_privacy_policy = document.querySelectorAll('.lgpd-close');
        this.btn_lgpd_accept = document.querySelector('#spw-btn-lgpd-accept');

        this.showNotice();
        this.openPopup();
        this.closePopup();
        this.btnAccept();

    }

    showNotice()
    {
        // exibe a notificação
        if(this.storage === false) {

            let notice = this.notice;

            setTimeout(function()
            {
                notice.classList.remove('lgpd-hide');
            }, 3000);

        }
    }

    openPopup()
    {
        // abre o popup da política de privacidade
        let pop_up = this.popup;

        this.btn_privacy_policy.addEventListener('click', function(e) {
            e.preventDefault();
            pop_up.classList.remove('lgpd-hide');

        });
    }

    closePopup()
    {
        // fecha o popup da política de privacidade
        let pop_up = this.popup;

        this.btn_close_privacy_policy.forEach(function(el) {

            el.addEventListener('click', function(e) {
                e.preventDefault();
                pop_up.classList.add('lgpd-hide');
            });

        });

    }

    btnAccept()
    {
        // botão aceitar política
        let notice = this.notice;

        this.btn_lgpd_accept.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.setItem('spw_lgpd_storage', true);
            notice.classList.add('lgpd-hide');

        });
    }



}

          
function studioWidgetButton(btn_id)
{
     if( btn_id !== '' ) 
     {

          jQuery( function($) {
               
               $(document).on( 'click', '#' + btn_id, function(e) {

                    e.preventDefault();
                    window.history.back();

               });
          
          });

     }
}
jQuery(document).ready(function($) {


    let active_auto_submit_desktop = parseInt($('#scow-show-auto-submit-desktop').val());
    let active_auto_submit_tablet = parseInt($('#scow-show-auto-submit-tablet').val());
    let active_auto_submit_mobile = parseInt($('#scow-show-auto-submit-mobile').val());

    // MOBILE
    $('#scow-form-filter-mobile').change( function() {

       if(active_auto_submit_mobile === 1) {
            $(this).submit();
        }
    } );

    $(document).on('click', '#scow-filter-submit-mobile', function(e) {
        e.preventDefault();
        $('#scow-form-filter-mobile').submit();
    });


    // TABLET
    $('#scow-form-filter-tablet').change( function() {


        if(active_auto_submit_tablet === 1) {
            $( this ).submit();
        }

    } );

    $(document).on('click', '#scow-filter-submit-tablet', function(e) {
        e.preventDefault();
        $('#scow-form-filter-tablet').submit();
    });


    // DESKTOP
    $('#scow-form-filter-desktop').change( function() {

        if(active_auto_submit_desktop === 1) {
            $( this ).submit();
        }

    } );

    $(document).on("click", "#scow-filter-submit-desktop", function(e) {
        e.preventDefault();
        $('#scow-form-filter-desktop').submit();
    });



});





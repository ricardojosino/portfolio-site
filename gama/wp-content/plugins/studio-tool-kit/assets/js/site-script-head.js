
function studioAgentsForMapBr_closePop()
{
     jQuery(function($) {
     
          $(document).ready(function() {


               $("#studio-agents-for-map-br-pop-window-close, #studio-agents-for-map-br-pop-background").on( 'click', function() 
               {
                    $("#studio-agents-for-map-br-pop").fadeOut(500);
               });


          });
     
     
     });     
}


function studioAgentsForMapBr_PreloaderOpen()
{
     
     jQuery(function($) {
     
          $(document).ready(function() {


               $("#studio-agents-for-map-br-pop-preload").addClass("studio-agents-for-map-br-pop-preload-open");


          });
     
     
     });
     
}


function studioAgentsForMapBr_PreloaderClose()
{
     
     jQuery(function($) {
     
          $(document).ready(function() {


               $("#studio-agents-for-map-br-pop-preload").removeClass("studio-agents-for-map-br-pop-preload-open");


          });
     
     
     });
     
}

function studioBudget_screenFinalize_sendBudget()
{
    jQuery(document).ready(function($) {

            $("#budget_submit").click(function(e) {

                e.preventDefault();

                let name = studioBudget_screenFinalize_Validation('budget_name');
                let email = studioBudget_screenFinalize_Validation('budget_email');

                if(name === true && email === true) {

                    let current_buttom_text = $(this).find('.studio-widget-button-text').text();
                    let current_buttom_icon = $(this).find('.studio-widget-button-icon').html();
                    let budget_name = $("#budget_name").val();
                    let budget_email = $("#budget_email").val();
                    let budget_phone_mobile = $("#budget_phone_mobile").val();
                    let budget_phone_commercial = $("#budget_phone_commercial").val();
                    let budget_company = $("#budget_company").val();
                    let budget_company_cnpj = $("#budget_company_cnpj").val();
                    let email_to = $("#email_to").val();
                    let email_to_cc = $("#email_to_cc").val();
                    let email_subject = $("#email_subject").val();
                    let url_success = $("#url_success").val();

                    $(this).find('.studio-widget-button-text').text('Enviando');
                    $(this).find('.studio-widget-button-icon').html('<i class="fas fa-redo-alt fa-spin"></i>');


                    $.ajax(
                        {
                            url : ajax_object.ajax_url,
                            method : 'post',
                            data : {
                                'action' : 'studioBudget_send',
                                'budget_name' : budget_name,
                                'budget_email' : budget_email,
                                'budget_phone_mobile' : budget_phone_mobile,
                                'budget_phone_commercial' : budget_phone_commercial,
                                'budget_company' : budget_company,
                                'budget_company_cnpj' : budget_company_cnpj,
                                'email_to' : email_to,
                                'email_to_cc' : email_to_cc,
                                'email_subject' : email_subject,
                                'url_success' : url_success

                            },
                            beforeSend : function(jqXHR) {



                            },
                            success : function(data, textStatus, jqXHR) {
                                $("#studio-budget-finalize").html(data);
                            },
                            complete : function(jqXHR, textStatus) {

                            },
                            error(jqXHR, textStatus, errorThrown) {
                            }

                        }

                    );


                }

            });

    });
}


function studioBudget_screenFinalize_mask()
{
    jQuery(document).ready(function($) {

        $("#budget_phone_mobile").mask("(00) 00000-0000");
        $("#budget_phone_commercial").mask("(00) 0000-0000");
        $("#budget_company_cnpj").mask("00.000.000/0000-00");

    });
}

function studioBudget_screenFinalize_Validation(input_id)
{

        let input = jQuery("#" + input_id);
        let input_value = input.val();

        if(input_value === "") {
            input.addClass('spw-input-validation-error');
            return false;
        } else
        {
            input.removeClass('spw-input-validation-error');
            return true;
        }

}

function studioBudget_screenFinalize_localStorageSave()
{
    if(typeof(Storage)) {

        let name = jQuery("#budget_name");
        let email = jQuery("#budget_email");
        let phone_mobile = jQuery("#budget_phone_mobile");
        let phone_commercial = jQuery("#budget_phone_commercial");
        let company = jQuery("#budget_company");
        let company_cnpj = jQuery("#budget_company_cnpj");

        name.change(function() {
            localStorage.setItem('studio-budget-name', name.val());
        });

        email.change(function() {
            localStorage.setItem('studio-budget-email', email.val());
        });

        phone_mobile.change(function() {
            localStorage.setItem('studio-budget-phone-mobile', phone_mobile.val());
        });

        phone_commercial.change(function() {
            localStorage.setItem('studio-budget-phone-commercial', phone_commercial.val());
        });

        company.change(function() {
            localStorage.setItem('studio-budget-company', company.val());
        });

        company_cnpj.change(function() {
            localStorage.setItem('studio-budget-company-cnpj', company_cnpj.val());
        });


    }


}


function studioBudget_screenFinalize_localStorageGet()
{
    if(typeof(Storage)) {

        let name = localStorage.getItem('studio-budget-name');
        let email = localStorage.getItem('studio-budget-email');
        let phone_mobile = localStorage.getItem('studio-budget-phone-mobile');
        let phone_commercial = localStorage.getItem('studio-budget-phone-commercial');
        let company = localStorage.getItem('studio-budget-company');
        let company_cnpj = localStorage.getItem('studio-budget-company-cnpj');

        if(name) {
            jQuery("#budget_name").val(name);
        }

        if(email) {
            jQuery("#budget_email").val(email);
        }

        if(phone_mobile) {
            jQuery("#budget_phone_mobile").val(phone_mobile);
        }

        if(phone_commercial) {
            jQuery("#budget_phone_commercial").val(phone_commercial);
        }

        if(company) {
            jQuery("#budget_company").val(company);
        }

        if(company_cnpj) {
            jQuery("#budget_company_cnpj").val(company_cnpj);
        }



    }
}

function studioBudget_screenBudgetList_AlterQuantity( element_id, post_id, price )
{
    if(element_id) {

        jQuery(document).ready(function($) {

            let get_post_id = post_id ?? false;
            let get_price = price ?? false;

            $('#' + element_id).change(function() {

                let get_quantity = document.querySelector('#' + element_id).value;

                $.ajax({

                    url : ajax_object.ajax_url,
                    method : 'post',
                    data : {

                        action : 'studioBudget_alterQuantity',
                        post_id : get_post_id,
                        quantity : get_quantity,
                        price : get_price

                    },
                    success : function()
                    {

                    },
                    error : function() {

                    }


                });

            });

        });


    }
}



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
}jQuery(function($) {
     
     $(document).ready(function() {
          
          
          $(".studio-agents-for-map-br-state").mouseover( function() {
               
               $(this).addClass("studio-agents-for-map-br-state-hover");
               $(this).next("text").addClass("studio-agents-for-map-br-text-hover");
               
          } );
          
          $(".studio-agents-for-map-br-state").mouseout( function() {
               
               $(this).removeClass("studio-agents-for-map-br-state-hover");
               $(this).next("text").removeClass("studio-agents-for-map-br-text-hover");
               
          } );
          
          
          $(".studio-agents-for-map-br-text").mouseover( function() {
               
               $(this).addClass("studio-agents-for-map-br-text-hover");
               $(this).prev(".studio-agents-for-map-br-state").addClass("studio-agents-for-map-br-state-hover");
               
          } );
          
          $(".studio-agents-for-map-br-text").mouseout( function() {
               
               $(this).removeClass("studio-agents-for-map-br-text-hover");
               $(this).prev(".studio-agents-for-map-br-state").removeClass("studio-agents-for-map-br-state-hover");
               
          } );
          
          
          
          $(".studio-agents-for-map-br-state, .studio-agents-for-map-br-text").click( function(e) {
               
               e.preventDefault();
               let stateName = $(this).attr('slug');
               
               studioAgentsForMapBr_PreloaderOpen();
               
               $.ajax(
               
               {
                    url : ajax_object.ajax_url,
                    method : 'post',
                    data : { 'action' : 'studioAgentsForMapBr_ajaxMap', 'state' : stateName },
                    success: function (data, textStatus, jqXHR) {
                        $("#spw-map-pop").html(data);
                        studioAgentsForMapBr_PreloaderClose();
                    }
               }
               
               );
               
               
               
          });
          
          
          
          
     });
     
     
     
});     


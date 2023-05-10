
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



function studioFloatingMenuOpen(id)
{
     jQuery(document).ready(function() {

          let selector = "#" + id;

          jQuery( selector ).find("#studio-floating-menu-open").click( function() {

               jQuery("#studio-floating-menu-pop").show();

          } );

          jQuery( selector ).find("#studio-floating-menu-pop-btn-close").click( function() {

               jQuery("#studio-floating-menu-pop").hide();

          } );

     });

}class SpwLgpd
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




jQuery(document).ready(function($) {


    let horizontalCategories;
    let studioCarousel;

    // LISTA DE CATEGORIAS
    horizontalCategories = {

        selector: '.studio-carousel-with-categories',
        select_selector: '.studio-horizontal-categories .s-btn-menu-select',

        openFilter : function() {

            $(document).on('click', this.select_selector, function(e) {
                e.preventDefault();
                $(this).parent('.s-categories').find('.s-items').toggleClass('s-hidden-on-mobile');

            });

        },

        closeFilter : function() {

            $(document).on('click', this.select_selector,function(e) {

                e.preventDefault();
                $(this).parent('.s-categories').find('.s-items').addClass('s-hidden-on-mobile');

            });

        },

        onClickCategory : function() {



            $('body').on('click', '.studio-courses-carousel .studio-carousel-with-categories .studio-horizontal-categories .s-categories .s-items .s-item', function(e) {


                let widget_id = horizontalCategories.widgetId(this);
                let category_id = $(this).attr('category_id');
                let callback_id = '#' + widget_id;
                let has_s_last = $(this).hasClass('s-last');

                if(has_s_last === false)
                {

                    e.preventDefault();

                    $.ajax({

                        url: ajax_object.ajax_url,
                        method: 'post',
                        data: { action: 'studioCoursesCategoriesOnClickCategory', category: category_id, widget_id: widget_id },
                        beforeSend() {
                            $(callback_id).find('.s-carousel').html('<p style="text-align:center">Carregando cursos...</p>');
                        },
                        success: function(result) {
                            $(callback_id).html(result);
                            studioCarousel.run();
                        }

                    });

                }

            });

        },

        widgetId: function(el) {

            return $(el).parents('.studio-courses-carousel-wrap').attr('id');

        },

        run : function() {

            this.openFilter();
            this.onClickCategory();

        }

    };

    // CARROSSEL
    studioCarousel = {

        selector: '.jcarousel',

        config: {
            interval: 3000,
            autostart: 'false',
            continuation: 'true',
        },

        initialConfiguration: function(selector) {


            let interval =  $(selector).attr('interval');
            let autostart =  $(selector).attr('autostart');
            let continuation = $(selector).attr('continuation');


            if(interval) {
                this.config.interval = parseInt(interval);
            }

            if(autostart) {
                this.config.autostart = autostart;
            }

            if(continuation) {

                this.config.continuation = continuation;
            }

        },

        start: function(selector) {
            $(selector).jcarousel({

            })

        },

        autoPlay: function(selector) {


            if(this.config.autostart === 'true') {

                $(selector).jcarousel().jcarouselAutoscroll({
                    interval: this.config.interval,
                    target: '+=1',
                    autostart: true,
                })

            }

        },

        control: function(selector) {

            $(selector + '~ .s-previous').jcarouselControl({
                target: '-=1'
            });

            $(selector + '~ .s-next').jcarouselControl({
                target: '+=1'
            });



            if(this.config.continuation === 'false') {

                $(selector + '~ .s-previous').hide();

                $(selector + '~ .s-previous').on('jcarouselcontrol:active', function() {
                    $(this).show();
                });

                $(selector + '~ .s-next').on('jcarouselcontrol:active', function() {
                    $(this).show();
                });

                $(selector + '~ .s-previous').on('jcarouselcontrol:inactive', function() {
                    $(this).hide();
                });

                $(selector + '~ .s-next').on('jcarouselcontrol:inactive', function() {
                    $(this).hide();

                });

            }

        },

        automaticContinuation: function(selector) {

            if(this.config.continuation === 'true') {
                $(selector).jcarousel({
                    wrap: 'both'
                });
            }
        },



        run: function() {

            $(this.selector).each(function() {

                let selector = $(this).attr('id');

                studioCarousel.initialConfiguration('#' + selector);
                studioCarousel.start('#' + selector);
                studioCarousel.autoPlay('#' + selector);
                studioCarousel.control('#' + selector);
                studioCarousel.automaticContinuation('#' + selector);

            } );

        },



    };


    // RUNS
    horizontalCategories.run();
    studioCarousel.run();



});



jQuery(function($) {
     
     
     $(document).ready(function() {
          
          $( '#studio-educational-materials-filter-form' ).change( function() {
               
               $( this ).submit();
               
          } );
          
          
          
     });
     
     
     
});     

jQuery(document).ready( function($) {


    let screen_device = $(window).width();


    if(screen_device >= 1200) {

        $(".shjc-journey").hide();

        $(".shjc").hover(function () {

            $(".shjc-journey-01").fadeIn(500);
            $(".shjc-journey-02").delay(500).fadeIn(500);
            $(".shjc-journey-03").delay(1000).fadeIn(500);
            $(".shjc-journey-04").delay(1500).fadeIn(500);
            $(".shjc-journey-05").delay(2000).fadeIn(500);
            $(".shjc-journey-06").delay(2500).fadeIn(500);
            $(".shjc-journey-07").delay(3000).fadeIn(500);
            $(".shjc-journey-08").delay(3500).fadeIn(500);
            $(".shjc-journey-09").delay(4000).fadeIn(500);

            $(".shjc").off("mouseenter mouseleave");
        });

    }


} );function studioNeoHomeAmbienceChangeBanner( banner_id, class_ambience )
{
    jQuery(document).ready(function($) {

        $(document).on('click', this, function() {

            $("." + class_ambience).addClass("studio-display-off");

            $("#" + banner_id).removeClass('studio-display-off');

        })

    });
}jQuery(document).ready(function($) {

    studioVideosFilter = {

        input : $('.studio-videos-filter').find('select'),
        form : $('.studio-videos-filter').find('#studio-videos-form-filter'),
        onChange : function() {

            input = studioVideosFilter.input;

            input.change(function() {

                studioVideosFilter.form.submit();

            });

        },

        run : function() {

            studioVideosFilter.onChange();

        }


    };

    studioVideosFilter.run();

});
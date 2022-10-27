
function studioAjax(selector, callback_id, method, data_inputs, data_values, data_type, content_type, async)
{
     
     jQuery( function($) {
          
          
          $(document).ready( function() {
     
               $(selector).click(function(e) {

                    e.preventDefault();

                    var get_method = method ? method : 'post';
                    var get_data_type = data_type ? data_type : 'html';
                    var get_data = studio_ajax_php_data(data_inputs, data_values);
                    var get_async = async ? async : true;
                    var get_content_type = content_type ? content_type : 'application/x-www-form-urlencoded; charset=UTF-8';

                    $.ajax({

                         url : ajax_object.ajax_url,
                         method : get_method,
                         dataType : get_data_type,
                         timeout : 0,
                         data : get_data,
                         async : get_async,
                         contentType : get_content_type,
                         beforeSend : function() {

                              studioPreloadOpen();

                         },
                         success : function(result) 
                         {

                              $(callback_id).html(result);
                              studioPreloadClose();
                              

                         },
                         complete : function() 
                         {
                              

                         },
                         error: function (jqXHR, textStatus, errorThrown) 
                         {
                        
                              studioPreloadClose();
                              studioPreloadErrorOpen();
                        
                         }

                    });

               });

     
          });
          
          
     });
     
     
}


function studio_ajax_php_data(data_inputs, data_values)
{
          let data1;
          let data2;

          data1 = studio_ajax_php_data_inputs(data_inputs);
          data2 = studio_ajax_php_data_values(data_values);

          return jQuery.extend(data1, data2);
     
}


function studio_ajax_php_data_inputs(data)
{
     
      if (data !== '') 
          {
     
               let list = data.split(",");
               const data_object = {};


               list.forEach( function(content) {

                    let input = content.split(':');

                    let key = input[0];
                    let value = input[1];

                    let newvalue = jQuery('#' + value).val();

                    data_object[key] = newvalue;

               } );

               return data_object;

          };
     
}


function studio_ajax_php_data_values(data)
{
     
     if (data !== '') 
     {

          let list = data.split(",");
          const data_object = {};


          list.forEach( function(content) {

               let input = content.split(':');

               let key = input[0];
               let value = input[1];

               data_object[key] = value;

          } );

          return data_object;

     }
     
}
function studioAjaxLoad( data, url )
{
     
     jQuery( function($) {
          
          $(document).ready( function() {
               
               studioPreloadOpen();
               window.history.pushState("Object", url, url);

               $( "#studio-page" ).load( 'admin-ajax.php', data, function(responseText, textStatus, req) 
               {

                    if(textStatus === "error") 
                    {
                         studioPreloadErrorOpen();
                         studioPreloadClose();
                    } else {
                         studioPreloadClose();
                    }


               });
               
          } );
          
     } );
     
}
function studioAjaxLoadOnClick(action_id, data, url)
{
     
     jQuery( function($) {
          
          $(document).ready( function() {
               
               $("#" + action_id).click( function(e) {
                    
                    e.preventDefault();
                    
                    studioPreloadOpen();
                    window.history.pushState("Object", url, url);
                    
                    $( "#studio-page" ).load( 'admin-ajax.php', data, function(responseText, textStatus, req) {
                         
                         if(textStatus === "error") 
                         {
                              
                              studioPreloadClose();
                              studioPreloadErrorOpen();
                              
                         } else {
                              studioPreloadClose();
                         }
                         
                         
                    });
                    
               } );
               
          } );
          
     } );
     
}
function studioConfirmOpen( confirm_id, action_id)
{
     jQuery(function($) {
          
          $(document).ready(function() {
               
               $("#" + action_id).click( function() {
            
                    $("#" + confirm_id).removeClass("studio-confirm-close");
                    $("#" + confirm_id).addClass("studio-confirm-open").animate( {opacity : '1'} );
               
               });
               
          } );
          
     });
}

function studioConfirmClose(confirm_id, action_id)
{
     jQuery(function($) {
          
          $(document).ready(function() {
               
               $("#" + action_id).click(function() {
                    $("#" + confirm_id).animate(  { opacity : "0" } , 500, function() {
                       
                         $("#" + confirm_id).removeClass("studio-confirm-open");
                         $("#" + confirm_id).addClass("studio-confirm-close");
                         
                    });
               });
               
          });
          
     });
}function studioFeedbackClose()
{
     jQuery(document).ready(function() {
               
          jQuery("#studio-feedback-itens-close").click( function(e) {

               e.preventDefault();
               jQuery("#studio-feedback").fadeOut(500);

          } );

     });
}
function studioWidgetFilterSidebarOpenBoxMobile()
{
          jQuery(document).ready( function($) {


               $(document).on('click', '#studio-widget-filter-sidebar-mobile-itens-close', function() {

                    $('html,body').css('overflow', 'auto');
                    $(".studio-widget-filter-sidebar-mobile-itens").fadeOut(500, function() {
                         $(this).addClass("studio-widget-filter-sidebar-hidden");
                    });

               });

               $(document).on('click', '#studio-widget-filter-sidebar-mobile-btn', function() {

                    $('html,body').css('overflow', 'hidden');
                    $(".studio-widget-filter-sidebar-mobile-itens").fadeIn(500, function() {
                         $(this).removeClass("studio-widget-filter-sidebar-hidden");
                    });
               });


          });
}


function studioWidgetFilterSidebarOpenSubcategories()
{
     jQuery(document).ready(function($) {

          $(document).on('click', '.has_subcategories', function(e) {

               e.preventDefault();
               $(this).parent().find('.studio-widget-filter-sidebar-subitems').toggle();

          });

     });
}function widgetInputQuantity_btnMore(widget_id, input_id, maximum_number)
{
    jQuery(document).ready(function($) {

        $("#" + widget_id).find(".spw-btn-change.spw-btn-more").click(function() {

            let input = $("#" + input_id);
            let value = parseInt( input.val() );
            let next_value = value + 1;

            if(next_value <= maximum_number || maximum_number === '') {
                input.val(next_value);
            } else {
                input.val(maximum_number);
            }

        });

    });
}


function widgetInputQuantity_btnLess(widget_id, input_id, minimum_number)
{
    jQuery(document).ready(function($) {

        $("#" + widget_id).find(".spw-btn-change.spw-btn-less").click(function() {

            let input = $("#" + input_id);
            let value = parseInt( input.val() );
            let next_value = value - 1;

            if( value > minimum_number ) {
                input.val(next_value);
            } else {
                input.val(minimum_number);
            }



        });

    });
}

jQuery(function($) {
     
     $(document).ready(function() {
          
          //$('body').hide();
          
     });
     
});
function studioPreloadOpen()
{
     jQuery( function($) {
          
          $(document).ready( function() {
               
               $("#studio-preload").removeClass("studio-preload-close").addClass("studio-preload-open");
               
          } );
          
          
     } );
}

function studioPreloadClose()
{
     jQuery( function($) {
          
          $(document).ready( function() {
               
               $("#studio-preload").removeClass("studio-preload-open").addClass("studio-preload-close");
               
               
          } );
          
          
     } );
}


function studioPreloadErrorOpen()
{
     jQuery( function($) {
          
          $(document).ready( function() {
               
               $("#studio-preload-error").removeClass("studio-preload-close").addClass("studio-preload-open");
               studioPreloadErrorClose();
               
          } );
          
          
     } );
}

function studioPreloadErrorClose()
{
     jQuery( function($) {
          
          $(document).ready( function() {
               
               $("#studio-preload-error").click( function() {
                    
                    $("#studio-preload-error").removeClass("studio-preload-open").addClass("studio-preload-close");
                    
               } );
               
               
          } );
          
          
     } );
}function studioAccordionClosseAll(status)
{

    jQuery( function($) {

        if(status === 'open') {

            $(".studio-widget-accordion-item-header").removeClass("studio-widget-accordion-item-header-active");
            $(".studio-widget-accordion-item-contents").removeClass("studio-widget-accordion-item-contents-open");
            $(".studio-widget-accordion-item").attr("status", 'closed');
            $(".studio-widget-accordion-item-header-icon" ).html('<i class="fas fa-plus"></i>');

        }

    } );



}
function studioConfirmOpen( confirm_id, action_id)
{
     jQuery(function($) {
          
          $(document).ready(function() {
               
               $("#" + action_id).click( function() {
            
                    $("#" + confirm_id).removeClass("studio-confirm-close");
                    $("#" + confirm_id).addClass("studio-confirm-open").animate( {opacity : '1'} );
               
               });
               
          } );
          
     });
}

function studioConfirmClose(confirm_id, action_id)
{
     jQuery(function($) {
          
          $(document).ready(function() {
               
               $("#" + action_id).click(function() {
                    $("#" + confirm_id).animate(  { opacity : "0" } , 500, function() {
                       
                         $("#" + confirm_id).removeClass("studio-confirm-open");
                         $("#" + confirm_id).addClass("studio-confirm-close");
                         
                    });
               });
               
          });
          
     });
}function studioFeedbackClose()
{
     jQuery(document).ready(function() {
               
          jQuery("#studio-feedback-itens-close").click( function(e) {

               e.preventDefault();
               jQuery("#studio-feedback").fadeOut(500);

          } );

     });
}
function studioWidgetFilterSidebarOpenBoxMobile()
{
          jQuery(document).ready( function($) {


               $(document).on('click', '#studio-widget-filter-sidebar-mobile-itens-close', function() {

                    $('html,body').css('overflow', 'auto');
                    $(".studio-widget-filter-sidebar-mobile-itens").fadeOut(500, function() {
                         $(this).addClass("studio-widget-filter-sidebar-hidden");
                    });

               });

               $(document).on('click', '#studio-widget-filter-sidebar-mobile-btn', function() {

                    $('html,body').css('overflow', 'hidden');
                    $(".studio-widget-filter-sidebar-mobile-itens").fadeIn(500, function() {
                         $(this).removeClass("studio-widget-filter-sidebar-hidden");
                    });
               });


          });
}


function studioWidgetFilterSidebarOpenSubcategories()
{
     jQuery(document).ready(function($) {

          $(document).on('click', '.has_subcategories', function(e) {

               e.preventDefault();
               $(this).parent().find('.studio-widget-filter-sidebar-subitems').toggle();

          });

     });
}function widgetInputQuantity_btnMore(widget_id, input_id, maximum_number)
{
    jQuery(document).ready(function($) {

        $("#" + widget_id).find(".spw-btn-change.spw-btn-more").click(function() {

            let input = $("#" + input_id);
            let value = parseInt( input.val() );
            let next_value = value + 1;

            if(next_value <= maximum_number || maximum_number === '') {
                input.val(next_value);
            } else {
                input.val(maximum_number);
            }

        });

    });
}


function widgetInputQuantity_btnLess(widget_id, input_id, minimum_number)
{
    jQuery(document).ready(function($) {

        $("#" + widget_id).find(".spw-btn-change.spw-btn-less").click(function() {

            let input = $("#" + input_id);
            let value = parseInt( input.val() );
            let next_value = value - 1;

            if( value > minimum_number ) {
                input.val(next_value);
            } else {
                input.val(minimum_number);
            }



        });

    });
}

jQuery(function($) {
     
     $(document).ready(function() {
          
          //$('body').hide();
          
     });
     
});
function studioPreloadOpen()
{
     jQuery( function($) {
          
          $(document).ready( function() {
               
               $("#studio-preload").removeClass("studio-preload-close").addClass("studio-preload-open");
               
          } );
          
          
     } );
}

function studioPreloadClose()
{
     jQuery( function($) {
          
          $(document).ready( function() {
               
               $("#studio-preload").removeClass("studio-preload-open").addClass("studio-preload-close");
               
               
          } );
          
          
     } );
}


function studioPreloadErrorOpen()
{
     jQuery( function($) {
          
          $(document).ready( function() {
               
               $("#studio-preload-error").removeClass("studio-preload-close").addClass("studio-preload-open");
               studioPreloadErrorClose();
               
          } );
          
          
     } );
}

function studioPreloadErrorClose()
{
     jQuery( function($) {
          
          $(document).ready( function() {
               
               $("#studio-preload-error").click( function() {
                    
                    $("#studio-preload-error").removeClass("studio-preload-open").addClass("studio-preload-close");
                    
               } );
               
               
          } );
          
          
     } );
}function studioAccordionClosseAll(status)
{

    jQuery( function($) {

        if(status === 'open') {

            $(".studio-widget-accordion-item-header").removeClass("studio-widget-accordion-item-header-active");
            $(".studio-widget-accordion-item-contents").removeClass("studio-widget-accordion-item-contents-open");
            $(".studio-widget-accordion-item").attr("status", 'closed');
            $(".studio-widget-accordion-item-header-icon" ).html('<i class="fas fa-plus"></i>');

        }

    } );



}

jQuery(document).ready( function($) {

    studioWidgetFilterForm = {

        form : $('.studio-widget-filter-forms').find('.s-form'),
        btn_open_filter : $('.studio-widget-filter-forms').find('.s-open-filter'),
        btn_close_filter : $('.s-close-filter').find('.s-btn-close'),

        openFilter : function() {

            let filterForm = studioWidgetFilterForm;

            filterForm.btn_open_filter.click( function(e) {
                e.preventDefault();
                $('html').css('overflow', 'hidden');
                filterForm.form.removeClass('s-mobile-hidden');
            } );

        },

        closeFilter : function() {

            let filterForm = studioWidgetFilterForm;

            filterForm.btn_close_filter.click(function(e) {
                e.preventDefault();
                $('html').css('overflow', 'auto');
                filterForm.form.addClass('s-mobile-hidden');
            });

        },

        run : function()
        {
            let filterForm = studioWidgetFilterForm;

            filterForm.openFilter();
            filterForm.closeFilter();

        }

    };

    studioWidgetFilterForm.run();

} );



jQuery(function($) {
     
     $(document).ready(function() {
          
          //$('body').hide();
          
     });
     
});jQuery(function ($) {

    $(document).ready(function () {

        // troca os icones conforme o status
        $(".studio-widget-accordion-item").each(function () {

            let status;
            let icon;

            // status do item atual
            status = $(this).attr('status');

            // escolhe o icone conforme o status
            switch (status) {

                case 'closed' :
                    icon = '<i class="fas fa-plus"></i>';
                    break;

                case 'open' :
                    icon = '';
                    break;

            }

            // troca o icone dos itens
            $(this).find(".studio-widget-accordion-item-header-icon").html(icon);

            // exibe o box de conteudo conforme o status
            if (status === 'open') {

                $(this).find(".studio-widget-accordion-item-contents").addClass("studio-widget-accordion-item-contents-open");

                // marca como ativo
                $(this).find(".studio-widget-accordion-item-header").addClass("studio-widget-accordion-item-header-active");

            }


        });


        // abre o box do conteudo quando clica
        $(".studio-widget-accordion-item-header").on('click', function () {


            let toogle_contents;
            let item;
            let status;
            let new_status;
            let icon;

            toogle_contents = $(this).parent().find(".studio-widget-accordion-item-contents");
            item = $(this).parent();
            status = item.attr('status');


            switch (status) {

                case 'open' :
                    new_status = 'closed';
                    break;

                case 'closed' :
                    new_status = 'open';
                    break;

            }

            item.attr('status', new_status);

            status_updated = item.attr('status');

            switch (status_updated) {

                case 'closed' :
                    icon = '<i class="fas fa-plus"></i>';
                    break;

                case 'open' :
                    icon = '';
                    break;

            }


            if (status_updated === 'open') {

                studioAccordionClosseAll(status_updated);
                toogle_contents.addClass('studio-widget-accordion-item-contents-open');
                item.find('.studio-widget-accordion-item-header').addClass('studio-widget-accordion-item-header-active');
                item.find('.studio-widget-accordion-item-header-icon').html(icon);

            }

        });


    });

});jQuery(function($) {
          
          $(document).ready( function() {
               
               let width = $(document).width();
               let widgets = $(".studio-widget-imagem-title-middle");
               
               widgets.each( function( i, e ) {
                    
                    let id = $(e).attr('id');
                    let studio_effects = $("#" + id).attr('studio-effects');
                    
                    if(width > 1140 & studio_effects === 'mousehover' ) 
                    {

                         $("#" + id).find(".studio-widget-imagem-title-middle-title").hide();

                         $("#" + id).find(".studio-widget-imagem-title-middle-link").mouseover( function() {

                              $(this).parent().find('.studio-widget-imagem-title-middle-title').fadeIn().css('display', 'flex').addClass('studio-widget-imagem-title-middle-title-overlay');

                         } );

                         $("#" + id).find(".studio-widget-imagem-title-middle-link").mouseout( function() {

                              $(this).parent().find('.studio-widget-imagem-title-middle-title').fadeOut();

                         } );

                    }
                    
                    
               });
               
              
          } );
          
     });

jQuery(document).ready( function($) {

    studioWidgetFilterForm = {

        form : $('.studio-widget-filter-forms').find('.s-form'),
        btn_open_filter : $('.studio-widget-filter-forms').find('.s-open-filter'),
        btn_close_filter : $('.s-close-filter').find('.s-btn-close'),

        openFilter : function() {

            let filterForm = studioWidgetFilterForm;

            filterForm.btn_open_filter.click( function(e) {
                e.preventDefault();
                $('html').css('overflow', 'hidden');
                filterForm.form.removeClass('s-mobile-hidden');
            } );

        },

        closeFilter : function() {

            let filterForm = studioWidgetFilterForm;

            filterForm.btn_close_filter.click(function(e) {
                e.preventDefault();
                $('html').css('overflow', 'auto');
                filterForm.form.addClass('s-mobile-hidden');
            });

        },

        run : function()
        {
            let filterForm = studioWidgetFilterForm;

            filterForm.openFilter();
            filterForm.closeFilter();

        }

    };

    studioWidgetFilterForm.run();

} );



jQuery(function($) {
     
     $(document).ready(function() {
          
          //$('body').hide();
          
     });
     
});jQuery(function ($) {

    $(document).ready(function () {

        // troca os icones conforme o status
        $(".studio-widget-accordion-item").each(function () {

            let status;
            let icon;

            // status do item atual
            status = $(this).attr('status');

            // escolhe o icone conforme o status
            switch (status) {

                case 'closed' :
                    icon = '<i class="fas fa-plus"></i>';
                    break;

                case 'open' :
                    icon = '';
                    break;

            }

            // troca o icone dos itens
            $(this).find(".studio-widget-accordion-item-header-icon").html(icon);

            // exibe o box de conteudo conforme o status
            if (status === 'open') {

                $(this).find(".studio-widget-accordion-item-contents").addClass("studio-widget-accordion-item-contents-open");

                // marca como ativo
                $(this).find(".studio-widget-accordion-item-header").addClass("studio-widget-accordion-item-header-active");

            }


        });


        // abre o box do conteudo quando clica
        $(".studio-widget-accordion-item-header").on('click', function () {


            let toogle_contents;
            let item;
            let status;
            let new_status;
            let icon;

            toogle_contents = $(this).parent().find(".studio-widget-accordion-item-contents");
            item = $(this).parent();
            status = item.attr('status');


            switch (status) {

                case 'open' :
                    new_status = 'closed';
                    break;

                case 'closed' :
                    new_status = 'open';
                    break;

            }

            item.attr('status', new_status);

            status_updated = item.attr('status');

            switch (status_updated) {

                case 'closed' :
                    icon = '<i class="fas fa-plus"></i>';
                    break;

                case 'open' :
                    icon = '';
                    break;

            }


            if (status_updated === 'open') {

                studioAccordionClosseAll(status_updated);
                toogle_contents.addClass('studio-widget-accordion-item-contents-open');
                item.find('.studio-widget-accordion-item-header').addClass('studio-widget-accordion-item-header-active');
                item.find('.studio-widget-accordion-item-header-icon').html(icon);

            }

        });


    });

});jQuery(function($) {
          
          $(document).ready( function() {
               
               let width = $(document).width();
               let widgets = $(".studio-widget-imagem-title-middle");
               
               widgets.each( function( i, e ) {
                    
                    let id = $(e).attr('id');
                    let studio_effects = $("#" + id).attr('studio-effects');
                    
                    if(width > 1140 & studio_effects === 'mousehover' ) 
                    {

                         $("#" + id).find(".studio-widget-imagem-title-middle-title").hide();

                         $("#" + id).find(".studio-widget-imagem-title-middle-link").mouseover( function() {

                              $(this).parent().find('.studio-widget-imagem-title-middle-title').fadeIn().css('display', 'flex').addClass('studio-widget-imagem-title-middle-title-overlay');

                         } );

                         $("#" + id).find(".studio-widget-imagem-title-middle-link").mouseout( function() {

                              $(this).parent().find('.studio-widget-imagem-title-middle-title').fadeOut();

                         } );

                    }
                    
                    
               });
               
              
          } );
          
     });

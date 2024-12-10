require([
    'jquery'
], function($) {
    'use strict';
    
    const customSearchFormLabel = $('.page-header .header-content .block-search .block-content form .field.search .label');
    const customSearchFormBlock = $('.page-header .header-content .block-search .block-content form .field.search .control');
    const customSearchFormBtn 	= $('.page-header .header-content .block-search .block-content form .action.search');

    $('.page-header .header-content .block-search .block-content form .field.search .label').on('click', function(){
        if(customSearchFormBlock.hasClass('d-block') == true && customSearchFormBtn.hasClass('d-block') == true){
            customSearchFormBlock.removeClass('d-block');
            customSearchFormBtn.removeClass('d-block');
            customSearchFormLabel.removeClass('search-activated');
        }else{
            customSearchFormBlock.addClass('d-block');
            customSearchFormBtn.addClass('d-block');
            customSearchFormLabel.addClass('search-activated');
        }
    });

    const pitcSection 	= $('.product-info-three-column');
    const cpidSection 	= $('.product-info-three-column .custom-product-info-detailed .product.data.items');
    const cpmSection 	= $('.product-info-three-column .custom-product-media');
    const cpimSection 	= $('.product-info-three-column .custom-product-info-main');
    const cpmtIcon 		= $('.product-info-three-column .custom-product-media .towishlist');
        
    let mainSectionOffset 			= pitcSection.offset().top;
	let leftSectionHeight 			= cpidSection.outerHeight() + 50;
    let centerSectionHeight 		= cpmSection.outerHeight();
    let rightSectionHeight 			= cpimSection.outerHeight() + 50;
	let leftSectionMargin 			= centerSectionHeight - leftSectionHeight + 50;
    let rightSectionMargin 			= centerSectionHeight - rightSectionHeight - 150;
	let leftSectionOffsetRemove 	= mainSectionOffset + centerSectionHeight - leftSectionHeight;
    let rightSectionOffsetRemove	= mainSectionOffset + centerSectionHeight - rightSectionHeight;

    $(window).on('scroll', function(){
        if(jQuery(window).width() > 991){
            if($(this).scrollTop() > mainSectionOffset){
                cpidSection.addClass('fixed-product-section');
                cpimSection.addClass('fixed-product-section');
                cpmtIcon.addClass('fixed-product-section');
            }else{
                cpidSection.removeClass('fixed-product-section');
                cpimSection.removeClass('fixed-product-section');
                cpmtIcon.removeClass('fixed-product-section');
            }

            if($(this).scrollTop() > leftSectionOffsetRemove){
                cpidSection.removeClass('fixed-product-section');
                cpidSection.css('margin-top',leftSectionMargin+'px');
            }else{ cpidSection.css('margin-top','0px'); }

            if($(this).scrollTop() > rightSectionOffsetRemove){
                cpimSection.removeClass('fixed-product-section');
                cpimSection.css('margin-top',rightSectionMargin+'px');
            }else{ cpimSection.css('margin-top','0px'); }
        }
    });
});
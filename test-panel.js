$(function(){

	// dont touch script mother fuck
	
	// dom style

	var debugStyle = $('\
		<style>\
			.test-panel {\
			    position: fixed;\
			    left: 0;\
			    right: 0;\
			    background: rgba(0, 0, 0, 0.80);\
			    padding: 20px;\
			    bottom: 0;\
			    z-index: 15000000;\
			    box-sizing: border-box;\
			    transform: translateY(100%);\
			    transition: all 0.5s;\
			}\
			.test-panel.open {\
			    transform: translateY(0%);\
			    transition: all 0.5s;\
			}\
			.test-panel__btn {\
			    display: flex;\
			    align-items: center;\
			    justify-content: center;\
			    position: absolute;\
			    right: 20px;\
			    top: -50px;\
			    width: 50px;\
			    height: 50px;\
			    background: rgba(0, 0, 0, 0.80);\
			    cursor: pointer;\
			    border-radius: 5px 5px 0 0;\
			}\
			.test-panel__btn svg {\
			    transition: all 0.5s;\
			    transform: rotate(0deg);\
			}\
			.test-panel__btn.open svg {\
			    transition: all 0.5s;\
			    transform: rotate(180deg);\
			}\
			.test-panel__section {\
			    display: flex;\
			    justify-content: center;\
			    align-items: center;\
			}\
			.test-panel__item {\
			    display: flex;\
			    justify-content: flex-start;\
			    align-items: center;\
			    flex: 1;\
			}\
			.test-panel__label {\
			    margin-right: 5px;\
			}\
			.test-panel__name {\
			    font-size: 14px;\
			    font-family: Tahoma;\
			    font-size: 14px;\
			    color: #fff;\
			    line-height: 1;\
			    cursor: pointer;\
			}\
			.test-panel__label input {\
			    display: block;\
			    margin: 0;\
			    width: 15px;\
			    height: 15px;\
			    border: 2px solid #fff;\
			    border-radius: 4px;\
			    padding: 0;\
			}\
			.test-panel__mod-btn {\
			    display: flex;\
			    align-items: center;\
			    justify-content: center;\
				width: 25px;\
				height: 30px;\
				position: absolute !important;\
				right: 0;\
				top: 0;\
				z-index: 150;\
				padding: 5px 10px;\
				font-size: 14px;\
				background: rgba(0, 0, 0, 0.80);\
				color: #fff;\
				cursor: pointer;\
				text-transform: capitalize;\
			}\
			.debug__option__class {\
				position: relative;\
				outline: 1px dotted #507299;\
				box-shadow: -3px 1px 10px #0072f5;\
				transition: all 0.5s;\
			}\
			.debug_img__class {\
				position: relative;\
			}\
			.debug_img__class__wrap {\
				display: inline-block;\
				position:relative;\
			}\
			.debug_img__block {\
				position: absolute;\
				left: 0;\
				right: 0;\
				top: 0;\
				height: 25px;\
			}\
			.debug_img__block input {\
				width: 100%;\
				height: 25px;\
			}\
		</style>\
	');

	// dom elements

	var debugHtml = $('\
		<div class="test-panel">\
			<div class="test-panel__btn">\
				<svg fill="#FFFFFF" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">\
					<path d="M0 0h24v24H0V0z" fill="none"/>\
					<path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>\
				</svg>\
			</div>\
			<div class="test-panel-container">\
				<div class="test-panel__section">\
					<div class="test-panel__item">\
						<div class="test-panel__label">\
							<input id="text" name="test-panel-edit" type="checkbox">\
						</div>\
						<label for="text" class="test-panel__name">\
							Режим редактирования элементов\
						</label>\
					</div>\
					<div class="test-panel__item">\
						<div class="test-panel__label">\
							<input id="clone" name="test-panel-clone" type="checkbox">\
						</div>\
						<label for="clone" class="test-panel__name">\
							Режим клонирования элементов\
						</label>\
					</div>\
					<div class="test-panel__item">\
						<div class="test-panel__label">\
							<input id="clone" name="test-panel-img" type="checkbox">\
						</div>\
						<label for="clone" class="test-panel__name">\
								Режим редактирования картинок\
						</label>\
					</div>\
					<div class="test-panel__item">\
						<div class="test-panel__info"></div>\
					</div>\
				</div>\
			</div>\
		</div>\
	');

	var cloneModBlock = $('\
		<div class="test-panel__mod-btn">\
			<svg fill="#FFFFFF" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">\
			    <path d="M0 0h24v24H0z" fill="none"/>\
			    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>\
			</svg>\
		</div>\
	');

	var debugDescription = {
		news: "редактирование картинок + фиксы стилей",
		version: "1.1.0"
	}

	$('body').append(debugStyle, debugHtml);

	var debugbutton = $('.test-panel__btn');
	var degugPanel = $('.test-panel');
	var debuginfo = $('.test-panel__info');

	debugbutton.on('click', function(){
        $(this).toggleClass('open');
        $(this).parent().toggleClass('open');
    });

	$(document).on('click', function(e){
		e.stopPropagation();
		// console.log(e.target); скрыл
		var selectionElem         = $(e.target),
		    selectionElemTag      = selectionElem.context.tagName,
		    selectionElemClass    = selectionElem.context.className,
		    selectionElemClassRow = (selectionElemClass == "") ? ' Нет класса': ' Класс элемента <strong>' + selectionElemClass + '</strong>';

		if(selectionElem.closest('.test-panel').length) {
			return;
		}

		//on and off edit mod

		if($('[name=test-panel-edit]').is(':checked')) {
			selectionElem.attr('contenteditable', true);
		} else {
			selectionElem.attr('contenteditable', false);
		}

		//on and off clone mod

		if($('[name=test-panel-clone]').is(':checked')) {
			var cloneMod = selectionElem.clone();
			selectionElem.addClass('debug__option__class');

			selectionElem.append(cloneModBlock);
			debuginfo.empty().append('<span style="font-size: 14px; color: #fff;"> Тег <strong>' + selectionElemTag + '</strong>' + selectionElemClassRow + '</span>' );
			selectionElem.find('.test-panel__mod-btn').on('click', function(e){
				e.preventDefault();
				$(this).parent().after(cloneMod);
				$(this).remove();
			});
			return false;
		} else {
			$('.test-panel__mod-btn').remove();
			$('.debug__option__class').removeClass('debug__option__class');
		}

        //on and off image edit mod

        if($('[name=test-panel-img]').is(':checked')) {
            if(selectionElemTag == "IMG") {
                var imgSrcWrap  = selectionElem.wrap('<div class="debug_img__class__wrap"></div>'),
                	imgSrc 		= selectionElem.attr("src"),
                    imgSrcBlock = $('\
						<div class="debug_img__block">\
							<input type="text" value="">\
						</div>\
                	');
				selectionElem.toggleClass("debug_img__class");
				selectionElem.parent().append(imgSrcBlock);
				imgSrcBlock.find('input').val(imgSrc);

                console.log(imgSrc);
            }
		} else {
            $('.debug_img__class__wrap').removeClass('debug_img__class__wrap');
            selectionElem.parent().find('.debug_img__block').remove();
		}
	});

	//find adaptive test

	if($('[name=viewport]').length) {
		debuginfo.append('<span style="font-size: 12px; color: #fff;">Скорее всего на сайте присутствует адаптивная версия</span>');
	}

	console.log("Изменения :" + " " + debugDescription.news);
})
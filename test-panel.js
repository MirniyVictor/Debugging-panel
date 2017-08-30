$(function(){

	// dom style

	var debugStyle = $('\
		<style>\
			.test-panel {\
			    position: fixed;\
			    left: 0;\
			    right: 0;\
			    background: #507299;\
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
			    background: #507299;\
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
			    text-transform: uppercase;\
			    font-weight: bold;\
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
				width: 50px;\
				height: 50px;\
				position: absolute !important;\
				right: 0;\
				top: 0;\
				z-index: 150;\
				padding: 5px 10px;\
				font-size: 14px;\
				background: #507299;\
				color: #fff;\
				cursor: pointer;\
				text-transform: capitalize;\
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
							<input name="test-panel-edit" type="checkbox">\
						</div>\
						<div class="test-panel__name">\
							Режим редактирования элементов\
						</div>\
					</div>\
					<div class="test-panel__item">\
						<div class="test-panel__label">\
							<input name="test-panel-clone" type="checkbox">\
						</div>\
						<div class="test-panel__name">\
							Режим клонирования элементов\
						</div>\
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
			<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\
			    <path d="M0 0h24v24H0z" fill="none"/>\
			    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>\
			</svg>\
		</div>\
	');

	var debugDescription = {
		news: "Фикс клонирования",
		version: "1.0.9"
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
		var selectionElem = $(e.target);

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
			selectionElem.css('position', 'relative');
			
			selectionElem.append(cloneModBlock);
			selectionElem.find('.test-panel__mod-btn').on('click', function(e){
				e.preventDefault();
				$(this).parent().after(cloneMod);
				$(this).remove();
			});
			
			return false;
		}
	});

	console.log("Изменения :" + " " + debugDescription.news);
})
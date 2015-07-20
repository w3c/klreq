var switched = false;

function switch2ko () {
	if (switched) { alert('Refresh the page, then click on this button again.'); return; }
	
	var en = document.querySelectorAll('[data-lang=en]')
	for (var i=0;i<en.length;i++) en[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''
	document.documentElement.lang = 'ko'
	switched = true;
	
	// change boilerplate text
	document.getElementById('h-abstract').textContent = '요약'
	document.getElementById('h-sotd').textContent = '현재 문서의 상태'
	document.getElementById('h-toc').textContent = '목차'
	
	var notes = document.querySelectorAll('.note-title')
	for (i=0;i<notes.length;i++) notes[i].textContent = '주석'
	var figcaptions = document.querySelectorAll('figcaption')
	for (i=0;i<figcaptions.length;i++) figcaptions[i].firstChild.textContent = '그림 '
	
	var dts = document.querySelectorAll('dt')
	for (i=0;i<dts.length;i++) {
		switch (dts[i].textContent) {
		case 'This version:': dts[i].textContent = '현재 버전:'; break;
		case 'Latest published version:': dts[i].textContent = '최신 버전:'; break;
		case 'Latest editor\'s draft:': dts[i].textContent = '최신 편집자 초안:'; break;
		case 'Authors:': dts[i].textContent = '저자:'; break;
		case 'Editor:': dts[i].textContent = '편집자:'; break;
		case 'Bug tracker:': dts[i].textContent = '오류 추적:'; 
			dts[i].nextSibling.nextSibling.innerHTML = '<a href="https://github.com/w3c/klreq/issues">오류 파일</a> (<a href="https://github.com/w3c/klreq/issues">오류 보기</a>)'; break;
		case 'Github:': dts[i].textContent = '깃허브:'; 
			dts[i].nextSibling.nextSibling.innerHTML = '<a href="https://github.com/w3c/klreq">저장소</a>'; break;
		}
		}
	}
	
	
function switch2en () {
	if (switched) { alert('Refresh the page, then click on this button again.'); return; }
	
	var ko = document.querySelectorAll('[data-lang=ko]')
	for (var i=0;i<ko.length;i++) ko[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''
	document.documentElement.lang = 'en'
	switched = true;
	}


function addLangAttrs () {
	// adds lang attributes wherever there is a data-lang attribute
	// this is done by js to reduce burden on editors
	// if there's already a lang attribute in the tag, that tag is skipped
	// note that this may still produce temporarily incorrect labelling where text is awaiting translation
	
	var ko = document.querySelectorAll('[data-lang=ko]')
	for (i=0;i<ko.length;i++) { if (ko[i].lang == '') { ko[i].lang='ko'} }
	}

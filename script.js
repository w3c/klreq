
function switchLang (lang) {
// hides all elements with its-locale-filter-list set to the other language

	var langs = { 'ko': true, 'en':true } // en must come last (for all to work in front matter)
	if (lang==='ko') langs.en = false
	if (lang==='en') langs.ko = false

	var translations = {
		'en': {
			'abstract': 'Abstract',
			'sotd': 'Status of This Document',
			'toc': 'Table of Contents',
			'note': 'Note',
			'fig': 'Figure ',
			'thisversion': 'This version:',
			'latestpublished': 'Latest published version:',
			'editorsdraft': "Latest editor's draft:",
			'authors': 'Authors:',
			'editors': "Editors:",
			'formerEditors': "Former editors",
			'participate': "Participate:",
			'fileABug': "File a bug",
			'commitHistory': "Commit history",
			'pullRequests': "Pull requests"
			},
		'ko': {
			'abstract': '추상',
			'sotd': 'Status of This Document',
			'toc': 'Table of Contents',
			'note': 'Note',
			'fig': 'Figure ',
			'thisversion': 'This version:',
			'latestpublished': 'Latest published version:',
			'editorsdraft': "Latest editor's draft:",
			'authors': 'Authors:',
			'editors': "Editors:",
			'formerEditors': "Former editors",
			'participate': "Participate:",
			'fileABug': "File a bug",
			'commitHistory': "Commit history",
			'pullRequests': "Pull requests"
			},
		}
	
	// show all hidden elements
	var els = document.querySelectorAll('.hidden')
	for (var i=0;i<els.length;i++) els[i].classList.remove('hidden') 

	Object.keys(langs).forEach( function (lang) {
		if (langs[lang]) {
			// set the default language in html tag
			document.documentElement.lang = lang
			
			// change boilerplate text
			document.getElementById('abstract').firstChild.textContent = translations[lang].abstract
			document.getElementById('sotd').firstChild.textContent = translations[lang].sotd
			document.getElementById('table-of-contents').textContent = translations[lang].toc

			document.getElementById('thisversion').textContent = translations[lang].thisversion
			document.getElementById('latestpublished').textContent = translations[lang].latestpublished
			document.getElementById('editorsdraft').textContent = translations[lang].editorsdraft
			document.getElementById('editor').textContent = translations[lang].editors
			document.getElementById('participate').textContent = translations[lang].participate
			document.getElementById('fileABug').textContent = translations[lang].fileABug
			document.getElementById('commitHistory').textContent = translations[lang].commitHistory
			document.getElementById('pullRequests').textContent = translations[lang].pullRequests
			
			// change note and figure titles
			var notes = document.querySelectorAll('.note-title')
			for (let i=0;i<notes.length;i++) notes[i].textContent = translations[lang].note
			var figcaptions = document.querySelectorAll('figcaption')
			for (let i=0;i<figcaptions.length;i++) figcaptions[i].firstChild.textContent = translations[lang].fig
			}
			
		// hide relevant elements
		else {
			els = document.querySelectorAll('[its-locale-filter-list='+lang+']')
			for (var i=0;i<els.length;i++) els[i].classList.add('hidden') 
			}
		})
	}



function setFrontMatterIds () {
	// adds ids to dt elements in front matter to facilitate language switching
	
	var dts = document.querySelectorAll('dt')
	for (let i=0;i<dts.length;i++) {
		switch (dts[i].textContent.trim()) {
			case 'This version:': dts[i].id = "thisversion"; break;
			case 'Latest published version:': dts[i].id = "latestpublished"; break;
			case 'Latest editor\'s draft:': dts[i].id = "editorsdraft"; break;
			case 'Authors:': dts[i].id = "authors"; break;
			case 'Editor:': dts[i].id = "editor"; break;
			case 'Editors:': dts[i].id = "editors"; break;
			case 'Participate:': dts[i].id = "participate"; break;
			}
		}
	var anchors = document.querySelectorAll('.head a')
	for (let i=0;i<anchors.length;i++) {
		switch (anchors[i].textContent) {
			case 'File a bug': anchors[i].id = "fileABug"; break;
			case 'Commit history': anchors[i].id = "commitHistory"; break;
			case 'Pull requests': anchors[i].id = "pullRequests"; break;
			}
		}
	}




function addLangAttrs () { console.log("THIS FUNCTION IS NO LONGER NEEDED")
	// adds lang attributes wherever there is a data-lang attribute
	// this is done by js to reduce burden on editors
	// if there's already a lang attribute in the tag, that tag is skipped
	// note that this may still produce temporarily incorrect labelling where text is awaiting translation
	
	var ko = document.querySelectorAll('[its-locale-filter-list=ko]')
	for (i=0;i<ko.length;i++) { if (ko[i].lang == '') { ko[i].lang='ko'} }
	var en = document.querySelectorAll('[its-locale-filter-list=en]')
	for (i=0;i<en.length;i++) { if (en[i].lang == '') { en[i].lang='en'} }
	}


function initialiseLang () {
	// if a lang= parameter is passed with the URL, show in that language
	var parameters = location.search.split('&')
	parameters[0] = parameters[0].substring(1)
	for (var p=0;p<parameters.length;p++) {  
		var pairs = parameters[p].split('=')
		if (pairs[0] === 'lang') { 
			if (pairs[1]) { 
				switchLang(pairs[1]) 
				} 
			}
		}
	}

//figures = document.querySelectorAll('figure')
//for (let i=0;i<figures.length;i++) console.log(figures[i].id)
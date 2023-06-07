"use strict";
(() => {
  void function() {
    const LANG_LIST = ["en", "ko"];
    const L10N = {
      "en": {
        selector: {
          "head > title": "Requirements for Hangul Text Layout and Typography",
          "#abstract > h2": "Abstract",
          "#toc > ol > li:nth-child(1) > a": "Abstract",
          "#sotd > h2": "Status of This Document",
          "#toc > ol > li:nth-child(2) > a": "Status of This Document",
          "#table-of-contents": "Table of Contents",
          ".note-title": "Note"
        },
        "fig": "Fig. ",
        dt: {},
        dd: {
          "Bug tracker:": '<a href="https://github.com/w3c/klreq/issues">file a bug</a> (<a href="https://github.com/w3c/klreq/issues">open bugs</a>)'
        }
      },
      "ko": {
        selector: {
          "head > title": "한국어 텍스트 레이아웃 및 타이포그래피를 위한 요구사항",
          "#abstract > h2": "개요",
          "#toc > ol > li:nth-child(1) > a": "개요",
          "#sotd > h2": "문서 현황",
          "#toc > ol > li:nth-child(2) > a": "문서 현황",
          "#table-of-contents": "목차",
          ".note-title": "참고"
        },
        "fig": "그림 ",
        "summary": "More details about this document",
        dt: {
          "This version:": "현 버전:",
          "History:": "역사:",
          "Previous version:": "Previous version:",
          "Latest published version:": "최신 출판 버전:",
          "Latest editor's draft:": "편집 초안:",
          "Editor:": "편집자:",
          "Editors:": "편집자:",
          "Authors:": "저자:",
          "Former editors:": "이전 편집자",
          "Participate:": "참여:",
          "Feedback:": "Feedback:"
        },
        dd: {
          'Bug tracker:': '<a href="https://github.com/w3c/klreq/issues">file a bug</a> (<a href="https://github.com/w3c/klreq/issues">open bugs</a>)',
        }
      }
    };
    const $root = document.documentElement;
    let $$hidden = [];
    function arrayify(obj) {
      return Array.from ? Array.from(obj) : Array.prototype.slice.call(obj);
    }
    function $$(selector) {
      return arrayify(document.querySelectorAll(selector));
    }
    function toggle$rootClass(lang) {
      $root.lang = lang === "all" ? "en" : lang;
      if (lang === "all") {
        $root.classList.add("is-multilingual");
        $root.classList.remove("isnt-multilingual");
      } else {
        $root.classList.remove("is-multilingual");
        $root.classList.add("isnt-multilingual");
      }
    }
    function showAndHideLang(lang) {
      $$hidden.forEach(function($elmt) {
        Object.assign($elmt, { hidden: false });
      });
      if (lang === "all") {
        return;
      }
      $$hidden = LANG_LIST.filter(function(it) {
        return it !== lang;
      }).reduce(function(result, it) {
        return result.concat($$('[its-locale-filter-list="' + it + '"]'));
      }, []).map(function($elmt) {
        return Object.assign($elmt, { hidden: true });
      });
    }
    function replaceBoilerplateText(lang) {
      const l10n = L10N[lang === "all" ? "en" : lang];
      Object.keys(l10n.selector).forEach(function(s) {
        $$(s).forEach(function($elmt) {
          Object.assign($elmt, { textContent: l10n.selector[s] });
        });
      });
      $$("figcaption, .fig-ref").forEach(function($elmt) {
        Object.assign($elmt.firstChild, { textContent: l10n["fig"] });
      });
      $$("body > div.head > details > summary").forEach(function($summary) {
        let originalText = $summary.dataset.originalText || $summary.textContent.trim();
        let text = l10n["summary"] || originalText;
        if (text) {
          $summary.textContent = text;
          $summary.dataset.originalText = originalText;
        }
      });
      $$("body > div.head > details > dl > dt").forEach(function($dt) {
        let originalText = $dt.dataset.originalText || $dt.textContent.trim();
        let text = l10n.dt[originalText] || originalText;
        if (text) {
          $dt.textContent = text;
          $dt.dataset.originalText = originalText;
        }
        if (originalText === "Bug tracker:") {
          $dt.nextElementSibling.innerHTML = l10n.dd["Bug tracker:"];
        }
      });
    }
    window.switchLang = function(lang) {
      toggle$rootClass(lang);
      showAndHideLang(lang);
      replaceBoilerplateText(lang);
    };
    function addLangAttr() {
      toggle$rootClass("all");
      LANG_LIST.forEach(function(lang) {
        $$('[its-locale-filter-list="' + lang + '"]').forEach(function($elmt) {
          if (!$elmt.lang) {
            $elmt.lang = lang;
          }
        });
      });
    }
    addLangAttr();
  }();
})();

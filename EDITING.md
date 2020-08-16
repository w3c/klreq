# Additional information for editors 

Combining the English and Korean text in one document makes it much easier to develop and maintain content in both languages in parallel. However, it requires a certain sequence of steps when creating or modifying the text.

(Note that the English version will be the authoritative version, since it is more widely accessible to developers around the world.)

### Creating or modifying content

When creating new content, you should always create markup for both Korean and English versions.

Example:
```html
<p its-locale-filter-list="en" lang="en">Korean typography experts.</p>
<p its-locale-filter-list="ko" lang="ko">한국어 텍스트 폰트 전문가</p>
```


If you are able to create text in both English and Korean, please do so. If you are only able to create text in one language, still create the dual structure in markup, but put the same text in both places. Then add `class="translateme"` to the text that needs translation.

Example:
```html
<p its-locale-filter-list="en" lang="en" class="translateme">한국어 텍스트 폰트 전문가</p>
<p its-locale-filter-list="ko" lang="ko">한국어 텍스트 폰트 전문가</p>
```

If you change existing text, and if that change requires a change in the parallel translation but you are unable to do so, add `class="retranslateme"` to the text that needs to be updated.

For example:  

```html
<p its-locale-filter-list="en" lang="en" class="retranslateme">Korean typography experts.</p>
<p its-locale-filter-list="ko" lang="ko">한국어 텍스트 폰트 전문가</p>
```

If you need someone to check the translation you provided, add `class="checkme"` to the relevant tag.

For example:  

```html
<p its-locale-filter-list="en" lang="en" class="checkme">Korean typography experts.</p>
<p its-locale-filter-list="ko" lang="ko">한국어 텍스트 폰트 전문가</p>
```

The class names listed above produce special colouring effects in the displayed document.

When text highlighted by the `translateme`, `retranslateme`, or `checkme` class is updated to a final translation, the class should be removed.

### Markup tips

Here are some tips on how to maintain the parallel language structure in markup. The principles in these example approaches should be extended to other markup as needed.

The English text should always come before the Korean text.

List elements need `p` elements inside them:
```html
<li>
<p its-locale-filter-list="en" lang="en">Korean typography experts</p>
<p its-locale-filter-list="ko" lang="ko" >한국어 텍스트 폰트 전문가</p>
</li>
```

Headings should use `span`s for `en` and `ko` versions, and there should be a line break between spans.
```html
<h2>
  <span its-locale-filter-list="en" lang="en">Korean typography experts</span>
  <span its-locale-filter-list="ko" lang="ko">한국어 텍스트 폰트 전문가</span>
</h2>
```

Attribute `id`s should go on `section` elements, not `h[1-6]` elements.
```html
<section id="h_my_heading">
  <h2>
    <span its-locale-filter-list="en" lang="en">Korean typography experts</span>
    <span its-locale-filter-list="ko" lang="ko">한국어 텍스트 폰트 전문가</span>
  </h2>
```

Ids on `dfn` elements should start with `xxdef`, where `xx` is either `en` or `ko`.
```html
<p its-locale-filter-list="en" lang="en">Korean <dfn id="endef_term">typography</dfn> experts.</p>
<p its-locale-filter-list="ko" lang="ko">한국어 <dfn id="kodef_term">텍스트</dfn> 폰트 전문가.</p>
```

`figcaption`s should use `span`s for the different language versions.
```html
<figure>
Main figure content here.
<figcaption>
  <span its-locale-filter-list="en" lang="en">Korean typography experts</span>
  <span its-locale-filter-list="ko" lang="ko">한국어 텍스트 폰트 전문가</span>
</figcaption>
```

Use the following markup for Unicode codepoint names:
```html
<span class="uname">U+3002 IDEOGRAPHIC FULL STOP</span> [。]
```

To link to a section, use the ReSpec feature, ie. link to the id on the `section` tag using the [[[ ]]] syntax:
```html
[[[#mySectionId]]]
```

To link to a figure, use the ReSpec feature, ie. link to the id on the `figure` tag using the [[[ ]]] syntax:
```html
[[[#myFigureId]]]
```

For additional ideas about markup and styling in Internationalization Activity documents, especially wrt inline markup conventions, see
https://www.w3.org/International/docs/styleguide


### Pre-publication edits

the following edits should be made to the snapshot of the file that will be published.

[1] remove  onload="addLangAttrs();" from the body tag

[2] convert the contents of the h1 tag to the following:
```html
<span its-locale-filter-list="en" lang="en">Requirements for Hangul Text Layout and Typography</span><br/>
<span its-locale-filter-list="ko" lang="ko">한국어 텍스트 레이아웃 및 타이포그래피를 위한 요구사항</span>
```

[3] in the SOTD, change the link on "latest dated version in /TR" to point to the location of the document that is about to be published

(the same change should be made to the respec file)

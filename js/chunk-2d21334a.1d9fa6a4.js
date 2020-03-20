(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21334a"],{ac4f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"extra-component-datepicker-demo"}},[e._m(0),a("div",{staticClass:"vx-row match-height"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-default",{staticClass:"mb-base"})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-format",{staticClass:"mb-base"})],1)]),a("div",{staticClass:"vx-row match-height"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-min-max-date-range",{staticClass:"mb-base"})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-highlight-dates",{staticClass:"mb-base"})],1)]),a("div",{staticClass:"vx-row match-height"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-inline",{staticClass:"mb-base"})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-open-programatically",{staticClass:"mb-base"})],1)]),a("div",{staticClass:"vx-row match-height"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-translation",{staticClass:"mb-base"})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-rtl",{staticClass:"mb-base"})],1)]),a("div",{staticClass:"vx-row match-height"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-day-view-only",{staticClass:"mb-base"})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-month-view-only",{staticClass:"mb-base"})],1)]),a("div",{staticClass:"vx-row match-height"},[a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-date-month-view-only")],1),a("div",{staticClass:"vx-col md:w-1/2 w-full"},[a("datepicker-month-year-view-only")],1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mb-4"},[e._v("A simple Vue.js datepicker component. Supports disabling of dates, inline mode, translations. Read full documnetation "),a("a",{attrs:{href:"https://github.com/charliekassel/vuejs-datepicker",target:"_blank",rel:"nofollow"}},[e._v("here")])])}],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Default","code-toggler":""}},[a("p",[e._v("Rendering default DatePicker with "),a("code",[e._v("v-model")])]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{placeholder:"Select Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),a("p",{staticClass:"mt-4"},[e._v("Selected Date: "+e._s(e.date))])],1),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <datepicker placeholder="Select Date" v-model="date"></datepicker>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\n\nexport default {\n  data() {\n    return {\n      date: null,\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)},l=[],s=a("fa33"),c={data:function(){return{date:null}},components:{Datepicker:s["a"]}},o=c,p=a("2877"),d=Object(p["a"])(o,r,l,!1,null,null,null),m=d.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Format Datepicker","code-toggler":""}},[a("p",[e._v("Change datepicker format with "),a("code",[e._v("format")])]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{format:e.format}}),a("vs-select",{staticClass:"mt-4 w-full",model:{value:e.format,callback:function(t){e.format=t},expression:"format"}},e._l(e.formatOptions,(function(e,t){return a("vs-select-item",{key:t,attrs:{value:e.value,text:e.text}})})),1)],1),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <datepicker :format="format"></datepicker>\n  <vs-select v-model="format" class="mt-4 w-full">\n    <vs-select-item :key="index" :value="option.value" :text="option.text" v-for="(option,index) in formatOptions" />\n  </vs-select>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\n\nexport default {\n  data() {\n    return {\n      format: "d MMMM yyyy",\n      formatOptions:[\n        {text: "d MMM yyyy - e.g 12 Feb 2016" , value: "d MMM yyyy" },\n        {text: "d MMMM yyyy - e.g 12 February 2016", value: "d MMMM yyyy" },\n        {text: "yyyy-MM-dd - e.g 2016-02-12", value: "yyyy-MM-dd" },\n        {text: "dsu MMM yyyy - e.g 12th Feb 2016", value: "dsu MMM yyyy" },\n        {text: "D dsu MMM yyyy - e.g Sat 12th Feb 2016", value: "D dsu MMM yyyy" },\n      ],\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)},v=[],g={data:function(){return{format:"d MMMM yyyy",formatOptions:[{text:"d MMM yyyy - e.g 12 Feb 2016",value:"d MMM yyyy"},{text:"d MMMM yyyy - e.g 12 February 2016",value:"d MMMM yyyy"},{text:"yyyy-MM-dd - e.g 2016-02-12",value:"yyyy-MM-dd"},{text:"dsu MMM yyyy - e.g 12th Feb 2016",value:"dsu MMM yyyy"},{text:"D dsu MMM yyyy - e.g Sat 12th Feb 2016",value:"D dsu MMM yyyy"}]}},components:{Datepicker:s["a"]}},k=g,y=Object(p["a"])(k,u,v,!1,null,null,null),f=y.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Min-Max Date Range","code-toggler":""}},[a("p",[e._v("You can add min max date range to disable dates in number of ways: "),a("a",{attrs:{href:"https://github.com/charliekassel/vuejs-datepicker#disabled-dates",target:"_blank",rel:"nofollow"}},[e._v("docs")])]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{disabledDates:e.disabledDates}})],1),a("template",{slot:"codeContainer"},[e._v("\n<template>\n  <datepicker :disabledDates=\"disabledDates\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  data() {\n    return {\n      disabledDates: {\n        to: new Date(new Date().getFullYear(), new Date().getMonth()-2, 5), // Disable all dates up to specific date\n        from: new Date(new Date().getFullYear(), new Date().getMonth()+2, 26), // Disable all dates after specific date\n        daysOfMonth: [8, 11, 17], // Disable Specific days\n      }\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)},D=[],w={data:function(){return{disabledDates:{to:new Date((new Date).getFullYear(),(new Date).getMonth()-2,5),from:new Date((new Date).getFullYear(),(new Date).getMonth()+2,26),daysOfMonth:[8,11,17]}}},components:{Datepicker:s["a"]}},M=w,x=Object(p["a"])(M,h,D,!1,null,null,null),_=x.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Highlight Dates","code-toggler":""}},[a("p",[e._v("Highlight dates in datepicker using function with "),a("code",[e._v("highlighted")]),e._v(" prop")]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{highlighted:e.highlightedFn}})],1),a("template",{slot:"codeContainer"},[e._v("\n<template>\n  <datepicker :highlighted=\"highlightedFn\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  data() {\n    return {\n      highlightedFn: {\n        customPredictor(date) {\n          if (date.getDate() % 4 === 0) {\n            return true;\n          }\n        }\n      },\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)},C=[],O={data:function(){return{highlightedFn:{customPredictor:function(e){if(e.getDate()%4===0)return!0}}}},components:{Datepicker:s["a"]}},j=O,V=Object(p["a"])(j,b,C,!1,null,null,null),F=V.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Inline","code-toggler":""}},[a("p",[e._v("Create inline datepicker using "),a("code",[e._v("inline")]),e._v(" prop")]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{inline:!0}})],1),a("template",{slot:"codeContainer"},[e._v("\n<template>\n  <datepicker :inline=\"true\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)},E=[],P={components:{Datepicker:s["a"]}},R=P,S=Object(p["a"])(R,$,E,!1,null,null,null),Y=S.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Open Programatically","code-toggler":""}},[a("p",[e._v("Open datepicker programatically using "),a("strong",[e._v("ref")]),e._v(" and "),a("strong",[e._v("click-event")])]),a("div",{staticClass:"mt-5"},[a("vs-button",{staticClass:"mb-4",on:{click:function(t){return e.$refs.programaticOpen.showCalendar()}}},[e._v("Open Picker")]),a("datepicker",{ref:"programaticOpen"})],1),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-button class="mb-4" @click="$refs.programaticOpen.showCalendar()">Open Picker</vs-button>\n  <datepicker ref="programaticOpen"></datepicker>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)},H=[],I={components:{Datepicker:s["a"]}},J=I,L=Object(p["a"])(J,T,H,!1,null,null,null),A=L.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Translation","code-toggler":""}},[a("p",[e._v("Date picker language: "+e._s(e.languages[e.language].language))]),a("div",{staticClass:"mt-5"},[a("vs-select",{staticClass:"mb-4 w-1/3",model:{value:e.language,callback:function(t){e.language=t},expression:"language"}},e._l(e.languages,(function(e,t){return a("vs-select-item",{key:t,attrs:{value:t,text:e.language}})})),1),a("datepicker",{attrs:{language:e.languages[e.language],format:"d MMMM yyyy"}})],1),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vs-select v-model="language" class="mb-4 w-1/3">\n    <vs-select-item :key="key" :value="key" :text="language.language" v-for="(language, key) in languages" />\n  </vs-select>\n  <datepicker :language="languages[language]" format="d MMMM yyyy"></datepicker>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\nimport * as lang from \'vuejs-datepicker/src/locale\';\n\nexport default {\n  data() {\n    return {\n      language: "en",\n      languages: lang,\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)},z=[],B=a("ee9b"),G={data:function(){return{language:"en",languages:B}},components:{Datepicker:s["a"]}},K=G,N=Object(p["a"])(K,q,z,!1,null,null,null),Q=N.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"RTL Datepicker","code-toggler":""}},[a("p",[e._v("Rendering RTL DatePicker using "),a("code",[e._v("language")]),e._v(" prop")]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{language:e.languages.he}})],1),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <datepicker :language="languages.he"></datepicker>\n</template>\n\n<script>\nimport Datepicker from \'vuejs-datepicker\';\nimport * as lang from "vuejs-datepicker/src/locale";\n\nexport default {\n  data() {\n    return {\n      languages: lang,\n    }\n  },\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ')])],2)},W=[],X={data:function(){return{languages:B}},components:{Datepicker:s["a"]}},Z=X,ee=Object(p["a"])(Z,U,W,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Day View Only","code-toggler":""}},[a("p",[e._v("Rendering default DatePicker with Day view only")]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{minimumView:"day",maximumView:"day"}})],1),a("template",{slot:"codeContainer"},[e._v("\n<template>\n  <datepicker :minimumView=\"'day'\" :maximumView=\"'day'\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)},ne=[],ie={components:{Datepicker:s["a"]}},re=ie,le=Object(p["a"])(re,ae,ne,!1,null,null,null),se=le.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Month View Only","code-toggler":""}},[a("p",[e._v("Rendering default DatePicker with Month view only")]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{minimumView:"month",maximumView:"month"}})],1),a("template",{slot:"codeContainer"},[e._v("\n<template>\n  <datepicker :minimumView=\"'month'\" :maximumView=\"'month'\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)},oe=[],pe={components:{Datepicker:s["a"]}},de=pe,me=Object(p["a"])(de,ce,oe,!1,null,null,null),ue=me.exports,ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Date and Month View Only","code-toggler":""}},[a("p",[e._v("Rendering default DatePicker with date and month view only")]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{minimumView:"day",maximumView:"month"}})],1),a("template",{slot:"codeContainer"},[e._v("\n<template>\n  <datepicker :minimumView=\"'day'\" :maximumView=\"'month'\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)},ge=[],ke={components:{Datepicker:s["a"]}},ye=ke,fe=Object(p["a"])(ye,ve,ge,!1,null,null,null),he=fe.exports,De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Month and Year View Only","code-toggler":""}},[a("p",[e._v("Rendering default DatePicker with month and year view only")]),a("div",{staticClass:"mt-5"},[a("datepicker",{attrs:{minimumView:"month",maximumView:"year"}})],1),a("template",{slot:"codeContainer"},[e._v("\n<template>\n  <datepicker :minimumView=\"'month'\" :maximumView=\"'year'\"></datepicker>\n</template>\n\n<script>\nimport Datepicker from 'vuejs-datepicker';\n\nexport default {\n  components: {\n    Datepicker\n  }\n}\n<\/script>\n        ")])],2)},we=[],Me={components:{Datepicker:s["a"]}},xe=Me,_e=Object(p["a"])(xe,De,we,!1,null,null,null),be=_e.exports,Ce={components:{DatepickerDefault:m,DatepickerFormat:f,DatepickerMinMaxDateRange:_,DatepickerHighlightDates:F,DatepickerInline:Y,DatepickerOpenProgramatically:A,DatepickerTranslation:Q,DatepickerRtl:te,DatepickerDayViewOnly:se,DatepickerMonthViewOnly:ue,DatepickerDateMonthViewOnly:he,DatepickerMonthYearViewOnly:be}},Oe=Ce,je=Object(p["a"])(Oe,n,i,!1,null,null,null);t["default"]=je.exports}}]);
//# sourceMappingURL=chunk-2d21334a.1d9fa6a4.js.map
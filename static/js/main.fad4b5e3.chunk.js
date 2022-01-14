(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(31),i=n.n(r),c=(n(37),n(3)),s=n(7),l=n(5),u=n(4),d=(n(38),n(39),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={event:{},collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("div",{className:"summary",children:e.summary}),Object(d.jsxs)("div",{className:"event-body",children:[Object(d.jsxs)("p",{className:"start-date",children:[e.start.dateTime," (",e.start.timeZone,")"]}),Object(d.jsxs)("p",{className:"location",children:["@",e.summary," | ",e.location]}),!t&&Object(d.jsxs)("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show"),children:[Object(d.jsx)("br",{}),Object(d.jsx)("h6",{className:"about",children:"About Event"}),Object(d.jsx)("a",{href:e.htmlLink,target:"_blank",rel:"noreferrer",children:"See details in Google calendar"}),Object(d.jsx)("p",{className:"event-description",children:e.description})]}),Object(d.jsx)("button",{className:"".concat(t?"show":"hide","-details-btn"),onClick:this.handleClick,children:t?"Show Details":"Hide-Details"})]})]})}}]),n}(o.Component),p=m,h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"eventlist",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(p,{event:e})},e.id)}))})}}]),n}(o.Component),g=h,f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).getStyle=function(){return{color:o.color}},o.color=null,o}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert",children:Object(d.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(o.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).color="blue",o}return n}(f),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).color="red",o}return n}(f),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var o=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==o.length)return e.setState({query:n,suggestions:o,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)(v,{className:"alert",text:this.state.infoText}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:"city",placeholder:"Search for desired city..",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[Object(d.jsx)("br",{}),this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(o.Component),w=y,j=n(62),T=n(63),k=n(64),Z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={numberOfEvents:32,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;n<=0||n>32?e.setState({infoText:"Enter number between 1 and 32"}):e.setState({numberOfEvents:n,infoText:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)(j.a,{className:"NumberOfEvents",children:Object(d.jsxs)(T.a,{children:[Object(d.jsxs)(k.a,{children:[Object(d.jsx)("p",{children:"Number of events:"}),Object(d.jsx)("input",{type:"number",className:"new-number-of-events",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]}),Object(d.jsx)(k.a,{children:Object(d.jsx)("div",{children:Object(d.jsx)(b,{text:this.state.infoText})})})]})})}}]),n}(o.Component),x=Z,M=n(8),S=n.n(M),E=n(13),q=n(32),O=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20211023T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMTEwMjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2021-10-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232583216000"',id:"3m5n6mcl1aqrdsg6k5vkr6to5p_20211023T163000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMTEwMjNUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:54:32.000Z",updated:"2020-07-01T15:11:31.608Z",summary:"Build Your First App with JavaScript",description:"You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",location:"Amsterdam, Netherlands",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-23T18:30:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-23T19:30:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3m5n6mcl1aqrdsg6k5vkr6to5p",originalStartTime:{dateTime:"2021-10-23T18:30:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",sequence:1,hangoutLink:"https://meet.google.com/vxc-jcvs-juv",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/vxc-jcvs-juv",label:"meet.google.com/vxc-jcvs-juv"},{entryPointType:"more",uri:"https://tel.meet/vxc-jcvs-juv?pin=7178471106778",pin:"7178471106778"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081619886",label:"+49 40 8081619886",pin:"257304091"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"vxc-jcvs-juv",signature:"AGirE/L1nRxxage7/xYEiTpkVsOW"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187231386852000"',id:"7qqm95l3op6khilck5cprvbq2u_20211024T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=N3FxbTk1bDNvcDZraGlsY2s1Y3BydmJxMnVfMjAyMTEwMjRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:00:58.000Z",updated:"2020-07-01T15:01:33.426Z",summary:"Fun with Angular",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features. ",location:"Dubai - United Arab Emirates",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-24T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-24T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"7qqm95l3op6khilck5cprvbq2u",originalStartTime:{dateTime:"2021-10-24T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"7qqm95l3op6khilck5cprvbq2u@google.com",sequence:1,hangoutLink:"https://meet.google.com/bim-zvvi-nio",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/bim-zvvi-nio",label:"meet.google.com/bim-zvvi-nio"},{entryPointType:"more",uri:"https://tel.meet/bim-zvvi-nio?pin=8340594476418",pin:"8340594476418"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081617267",label:"+49 40 8081617267",pin:"692195842"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"bim-zvvi-nio",signature:"AGirE/LuFdq5duwwWs+tztwtEG9B"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187234769062000"',id:"46717o686s7ibj1lp300pabro9_20211024T180000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NDY3MTdvNjg2czdpYmoxbHAzMDBwYWJybzlfMjAyMTEwMjRUMTgwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:28:56.000Z",updated:"2020-07-01T15:29:44.531Z",summary:"React Workshop",description:"React is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Toronto, ON, Canada",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-24T20:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-24T21:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"46717o686s7ibj1lp300pabro9",originalStartTime:{dateTime:"2021-10-24T20:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"46717o686s7ibj1lp300pabro9@google.com",sequence:1,hangoutLink:"https://meet.google.com/jnj-edux-duq",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/jnj-edux-duq",label:"meet.google.com/jnj-edux-duq"},{entryPointType:"more",uri:"https://tel.meet/jnj-edux-duq?pin=3356856978418",pin:"3356856978418"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-30-300195194",label:"+49 30 300195194",pin:"599388176"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"jnj-edux-duq",signature:"AGirE/LvoztfSZ5PVG7k7gmhVqyJ"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232047578000"',id:"013qoq4ns44cam7q4hqcf13eab_20211024T230000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MDEzcW9xNG5zNDRjYW03cTRocWNmMTNlYWJfMjAyMTEwMjRUMjMwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:05:49.000Z",updated:"2020-07-01T15:07:03.789Z",summary:"jQuery and More",description:"Do you know jQuery is used by around 70 percent of the 10 million most popular websites as of May 2019? \n\nThough many consider it dead after Angular and Express gained popularity, jQuery is still an important part of many websites. \n\nIn our workshop, we teach basic to advanced jQuery where you will also be able to build a simple app using it. If you are familiar with JS, join us to learn probably its most popular library.",location:"Santiago, Santiago Metropolitan Region, Chile",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-25T01:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-25T02:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"013qoq4ns44cam7q4hqcf13eab",originalStartTime:{dateTime:"2021-10-25T01:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"013qoq4ns44cam7q4hqcf13eab@google.com",sequence:1,hangoutLink:"https://meet.google.com/mqx-jyfg-uoc",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/mqx-jyfg-uoc",label:"meet.google.com/mqx-jyfg-uoc"},{entryPointType:"more",uri:"https://tel.meet/mqx-jyfg-uoc?pin=9759553023326",pin:"9759553023326"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618734",label:"+49 40 8081618734",pin:"678190650"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"mqx-jyfg-uoc",signature:"AGirE/KiaAjBYNu1wvc5f9lZ14v5"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187237556010000"',id:"111vmlbl7p8gmc0fbf5u107p8u_20211025T070000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=MTExdm1sYmw3cDhnbWMwZmJmNXUxMDdwOHVfMjAyMTEwMjVUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:47:59.000Z",updated:"2020-07-01T15:52:58.005Z",summary:"React Native Tokyo",description:"We meet every Monday and Thursday to talk about React Native and native app development in general. React Native Tokyo is an inclusive community that tries to cater to all levels of learners during meetups. \n\nJoin us if you are curious to hear about what's new in the field of native app development.",location:"Tokyo, Japan",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-25T09:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-25T10:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"111vmlbl7p8gmc0fbf5u107p8u",originalStartTime:{dateTime:"2021-10-25T09:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"111vmlbl7p8gmc0fbf5u107p8u@google.com",sequence:1,hangoutLink:"https://meet.google.com/ceo-behe-ssp",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/ceo-behe-ssp",label:"meet.google.com/ceo-behe-ssp"},{entryPointType:"more",uri:"https://tel.meet/ceo-behe-ssp?pin=2641490783465",pin:"2641490783465"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081617770",label:"+49 40 8081617770",pin:"889553795"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"ceo-behe-ssp",signature:"AGirE/JaL/DB2RyTMxMcHv3/9v58"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20211025T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMTEwMjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-25T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-25T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2021-10-25T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187234500432000"',id:"65jg7h2f96klim15fie75mj1a1_20211025T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NjVqZzdoMmY5NmtsaW0xNWZpZTc1bWoxYTFfMjAyMTEwMjVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:26:57.000Z",updated:"2020-07-01T15:27:30.216Z",summary:"AngularJS Workshop",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. \n\nJoin us to get introduced to this wonderful framework and dive deep into its features.",location:"Cape Town, South Africa",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-25T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-25T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"65jg7h2f96klim15fie75mj1a1",originalStartTime:{dateTime:"2021-10-25T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"65jg7h2f96klim15fie75mj1a1@google.com",sequence:1,hangoutLink:"https://meet.google.com/ctp-pwtc-pmq",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/ctp-pwtc-pmq",label:"meet.google.com/ctp-pwtc-pmq"},{entryPointType:"more",uri:"https://tel.meet/ctp-pwtc-pmq?pin=2824243883315",pin:"2824243883315"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-30-300195220",label:"+49 30 300195220",pin:"987090091"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"ctp-pwtc-pmq",signature:"AGirE/IQQTa9Vuy9hN+VDhEX7QNI"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187224991890000"',id:"3glt4dve9uip7oh5g5kb2bid2s_20211025T160000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M2dsdDRkdmU5dWlwN29oNWc1a2IyYmlkMnNfMjAyMTEwMjVUMTYwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T14:07:59.000Z",updated:"2020-07-01T14:08:15.945Z",summary:"Fun with Node.js",description:"Do you know that Node.js is basically a server having the capability of executing JavaScript? If you are familiar with JS, Node.js will be an easy ride. \n\nJoin us if you want to learn how to build the server-side of an app using Node.js.",location:"Nairobi, Kenya",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-25T18:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-25T19:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3glt4dve9uip7oh5g5kb2bid2s",originalStartTime:{dateTime:"2021-10-25T18:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3glt4dve9uip7oh5g5kb2bid2s@google.com",sequence:1,hangoutLink:"https://meet.google.com/wkx-akyy-omd",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/wkx-akyy-omd",label:"meet.google.com/wkx-akyy-omd"},{entryPointType:"more",uri:"https://tel.meet/wkx-akyy-omd?pin=9536747460380",pin:"9536747460380"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081616512",label:"+49 40 8081616512",pin:"576339034"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"wkx-akyy-omd",signature:"AGirE/Ielm/IWcKMVRqC0BqOJCpa"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187221858184000"',id:"3gi3kabkm3bua5lq3jhscc8s4c_20211025T200000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M2dpM2thYmttM2J1YTVscTNqaHNjYzhzNGNfMjAyMTEwMjVUMjAwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:23:24.000Z",updated:"2020-07-01T13:42:09.092Z",summary:"Intro to AngularJS-Remote",description:"Developed by Google, AngularJS is a relatively new JavaScript, and it is designed to make front-end development as easy as possible for you. Join us to get introduced to this wonderful framework and dive deep into its features. ",location:"New York, NY, USA",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2021-10-25T22:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2021-10-25T23:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3gi3kabkm3bua5lq3jhscc8s4c",originalStartTime:{dateTime:"2021-10-25T22:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3gi3kabkm3bua5lq3jhscc8s4c@google.com",sequence:2,hangoutLink:"https://meet.google.com/xcb-hfjb-psv",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/xcb-hfjb-psv",label:"meet.google.com/xcb-hfjb-psv"},{entryPointType:"more",uri:"https://tel.meet/xcb-hfjb-psv?pin=4442155852117",pin:"4442155852117"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081617300",label:"+49 40 8081617300",pin:"657955248"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"xcb-hfjb-psv",signature:"AGirE/KwGYI6/tI3Q9TgjwEMhE+o"},reminders:{useDefault:!0},eventType:"default"}],D=n(20),W=n.n(D),_=n(17),A=n.n(_),N=function(e){var t=e.map((function(e){return e.location}));return Object(q.a)(new Set(t))},B=function(){var e=Object(E.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=function(){var e=Object(E.a)(S.a.mark((function e(t){var n,o,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://mlzydonigl.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return o=e.sent,(a=o.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(E.a)(S.a.mark((function e(){var t,n,o,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return A.a.done(),e.abrupt("return",O);case 4:return e.next=6,R();case 6:if(!(t=e.sent)){e.next=19;break}return I(),n="https://mlzydonigl.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,W.a.get(n);case 12:if(!(o=e.sent).data){e.next=19;break}return a=N(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(a)),A.a.done(),e.abrupt("return",o.data.events);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(E.a)(S.a.mark((function e(){var t,n,o,a,r,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,B(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return o=new URLSearchParams(window.location.search),e.next=13,o.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,W.a.get("https://mlzydonigl.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",a&&J(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],numberOfEvents:32},e.updateEvents=function(t,n){C().then((function(n){var o="all"===t?n:n.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:o.slice(0,e.state.numberOfEvents),currentLocation:t})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,C().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:N(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(T.a,{children:[Object(d.jsx)(k.a,{children:Object(d.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents})}),Object(d.jsx)(k.a,{children:Object(d.jsx)(x,{numberOfEvents:this.state.numberOfEvents})})]}),Object(d.jsx)(T.a,{children:Object(d.jsx)(k.a,{children:Object(d.jsx)(g,{events:this.state.events})})})]})})}}]),n}(o.Component),U=Y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))};n(59);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),z()}},[[61,1,2]]]);
//# sourceMappingURL=main.fad4b5e3.chunk.js.map
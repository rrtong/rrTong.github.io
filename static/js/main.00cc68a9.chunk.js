(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),o=n.n(l),s=n(2),u=n(3),d=n(6),i=n(4),m=n(5),c=n(1),h=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"https://rrtong.info/"},r.a.createElement("img",{className:"navImg",src:"images/logo.png",alt:"logo"}))),r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"first"},r.a.createElement("a",{href:"https://www.linkedin.com/in/rrtong",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"navImg",src:"images/linkedinW.png",alt:"linkedin",onMouseOver:function(e){return e.currentTarget.src="images/linkedin.png"},onMouseOut:function(e){return e.currentTarget.src="images/linkedinW.png"}}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/rrtong",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"navImg",src:"images/githubW.png",alt:"github",onMouseOver:function(e){return e.currentTarget.src="images/githubFilled.png"},onMouseOut:function(e){return e.currentTarget.src="images/githubW.png"}}))),r.a.createElement("li",{className:"last"},r.a.createElement("a",{href:"files/rrtong_resume.pdf",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"navImg",src:"images/resumeW.png",alt:"resume",onMouseOver:function(e){return e.currentTarget.src="images/resume.png"},onMouseOut:function(e){return e.currentTarget.src="images/resumeW.png"}}))))))}}]),t}(a.Component),g=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(d.a)(this,Object(i.a)(t).call(this,e))).handleCommandKey=n.handleCommandKey.bind(Object(c.a)(Object(c.a)(n))),n.handleCommandLine=n.handleCommandLine.bind(Object(c.a)(Object(c.a)(n))),n.handleCommandSubmit=n.handleCommandSubmit.bind(Object(c.a)(Object(c.a)(n))),n.lastState={value:""},n.state={value:""},n.mode=0,n.lastRandom=0,n.rngResponse={cardRank:["A","2","3","4","5","6","7","8","9","10","J","Q","K"],cardSuit:["\u2665","\u2666","\u2663","\u2660"],leekMode:["sr","aram","urf"],aki:["it's gross","yat bun yan","that's fake","ew","uuugeeeeee","UGH! bcs"],akira:["ww","lel","icic","LAYMAO","lmao","mendoxeeeeee","lessssgooo","ikkousha"],alan:["o","ok","no","do u?"],amy:["hooooooooly mackerel!","eggs","DEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"],andrew:["eu sucks quote me on that","im so broke","we've come back from worse","get me OUT of this GAME","HA?"],bruceLee:["absorb what is useful, discard what is useless and add what is specifically your own","i fear not the man who has practiced 10,000 kicks once, but i fear the man who has practiced one kick 10,000 times.","using no way as a way, having no limitation as limitation.","i cannot teach you, only help you to explore yourself"],calvin:["leave him alone!","*clicks* noice","DUDE"],donnieYen:["i'm a very emotional guy.","i spent a couple of years doing american films. i did a few.","when you watch my films, you're feeling my heart.","i've always been in a rebel."],jackieChan:["don't try to be like jackie. there is only one jackie. study computers instead.","i will make action movies, i think, for a few more years, another five years.","i'm good for some things, bad for a lot of things.","coffee is a language in itself.","you cannot mix sports with politics."],justin:["o.o","O.o","o.O","=OOO","x.x","zzz"],matthew:["hey guys thikka here","how's it going thikkaaaaaa","thikka here","whats thikka doin here","thikka is alive"],melanie:["omg BLESSS","why do i eat so much","why do i feel so bloated","Ihy","HAHAHA","all i do is sit around and rot","XD"],nick:[":>D","omy","solid","dat pic tho","4meg1","s0rf"],oops:["oops","oof","yikes","crikey","gummy bear","ahh","omg","oh no","aiya","uh oh","owie"],sandra:["come on! when was the last time we went to namis?","let's go to namis!","you little shit"],sunny:["heh. bitch.","*hairflip*","smd bitch","i'll fight u irl"],vincent:["everything is possible.","if it works, it works.","research ticket? those are the best.","it is too sarcastic","no.. I am genteel","arwen is assumed to have deleterious effects","Study is the only panacea to everything"],wendy:["bah humbug","crackerjacks","holy trapezoid","kool-aid","right-o","this ho","there's what you should do, and there's what you do","flaming doritos","amayshing","mayonnaise","lemon difficult"]},n.modeDict={bopomofo:[{letter:"\u3105",sound:"b"},{letter:"\u3106",sound:"p"},{letter:"\u3107",sound:"m"},{letter:"\u3108",sound:"f"},{letter:"\u3109",sound:"d"},{letter:"\u310a",sound:"t"},{letter:"\u310b",sound:"n"},{letter:"\u310c",sound:"l"},{letter:"\u310d",sound:"g"},{letter:"\u310e",sound:"k"},{letter:"\u310f",sound:"h"},{letter:"\u3110",sound:"j"},{letter:"\u3111",sound:"q"},{letter:"\u3112",sound:"x"},{letter:"\u3113",sound:"zh"},{letter:"\u3114",sound:"ch"},{letter:"\u3115",sound:"sh"},{letter:"\u3116",sound:"r"},{letter:"\u3117",sound:"z"},{letter:"\u3118",sound:"c"},{letter:"\u3119",sound:"s"},{letter:"\u311a",sound:"a"},{letter:"\u311b",sound:"o"},{letter:"\u311c",sound:"e"},{letter:"\u311d",sound:"e"},{letter:"\u311e",sound:"ai"},{letter:"\u311f",sound:"ei"},{letter:"\u3120",sound:"ao"},{letter:"\u3121",sound:"ou"},{letter:"\u3122",sound:"an"},{letter:"\u3123",sound:"en"},{letter:"\u3124",sound:"ang"},{letter:"\u3125",sound:"eng"},{letter:"\u3126",sound:"er"},{letter:"\u3127",sound:"yi"},{letter:"\u3128",sound:"wu"},{letter:"\u3129",sound:"yu"},{letter:"\u312d",sound:"i"}],bopomofoc:[{letter:"\u3105",sound:"b"},{letter:"\u3106",sound:"p"},{letter:"\u3107",sound:"m"},{letter:"\u3108",sound:"f"},{letter:"\u3109",sound:"d"},{letter:"\u310a",sound:"t"},{letter:"\u310b",sound:"n"},{letter:"\u310c",sound:"l"},{letter:"\u310d",sound:"g"},{letter:"\u310e",sound:"k"},{letter:"\u310f",sound:"h"},{letter:"\u3110",sound:"j"},{letter:"\u3111",sound:"q"},{letter:"\u3112",sound:"x"},{letter:"\u3113",sound:"zh"},{letter:"\u3114",sound:"ch"},{letter:"\u3115",sound:"sh"},{letter:"\u3116",sound:"r"},{letter:"\u3117",sound:"z"},{letter:"\u3118",sound:"c"},{letter:"\u3119",sound:"s"}],bopomofoconsonant:[{letter:"\u3105",sound:"b"},{letter:"\u3106",sound:"p"},{letter:"\u3107",sound:"m"},{letter:"\u3108",sound:"f"},{letter:"\u3109",sound:"d"},{letter:"\u310a",sound:"t"},{letter:"\u310b",sound:"n"},{letter:"\u310c",sound:"l"},{letter:"\u310d",sound:"g"},{letter:"\u310e",sound:"k"},{letter:"\u310f",sound:"h"},{letter:"\u3110",sound:"j"},{letter:"\u3111",sound:"q"},{letter:"\u3112",sound:"x"},{letter:"\u3113",sound:"zh"},{letter:"\u3114",sound:"ch"},{letter:"\u3115",sound:"sh"},{letter:"\u3116",sound:"r"},{letter:"\u3117",sound:"z"},{letter:"\u3118",sound:"c"},{letter:"\u3119",sound:"s"}],bopomofov:[{letter:"\u311a",sound:"a"},{letter:"\u311b",sound:"o"},{letter:"\u311c",sound:"e"},{letter:"\u311d",sound:"e"},{letter:"\u311e",sound:"ai"},{letter:"\u311f",sound:"ei"},{letter:"\u3120",sound:"ao"},{letter:"\u3121",sound:"ou"},{letter:"\u3122",sound:"an"},{letter:"\u3123",sound:"en"},{letter:"\u3124",sound:"ang"},{letter:"\u3125",sound:"eng"},{letter:"\u3126",sound:"er"},{letter:"\u3127",sound:"yi"},{letter:"\u3128",sound:"wu"},{letter:"\u3129",sound:"yu"},{letter:"\u312d",sound:"i"}],bopomofovowel:[{letter:"\u311a",sound:"a"},{letter:"\u311b",sound:"o"},{letter:"\u311c",sound:"e"},{letter:"\u311d",sound:"e"},{letter:"\u311e",sound:"ai"},{letter:"\u311f",sound:"ei"},{letter:"\u3120",sound:"ao"},{letter:"\u3121",sound:"ou"},{letter:"\u3122",sound:"an"},{letter:"\u3123",sound:"en"},{letter:"\u3124",sound:"ang"},{letter:"\u3125",sound:"eng"},{letter:"\u3126",sound:"er"},{letter:"\u3127",sound:"yi"},{letter:"\u3128",sound:"wu"},{letter:"\u3129",sound:"yu"},{letter:"\u312d",sound:"i"}],hangul:[{letter:"\u3131",sound:"g"},{letter:"\u314b",sound:"k"},{letter:"\u3132",sound:"kk"},{letter:"\u3147",sound:"ng"},{letter:"\u3137",sound:"d"},{letter:"\u314c",sound:"t"},{letter:"\u3145",sound:"s"},{letter:"\u3146",sound:"ss"},{letter:"\u3148",sound:"j"},{letter:"\u314a",sound:"ch"},{letter:"\u3138",sound:"tt"},{letter:"\u3149",sound:"jj"},{letter:"\u3134",sound:"n"},{letter:"\u3139",sound:"r"},{letter:"\u3142",sound:"b"},{letter:"\u314d",sound:"p"},{letter:"\u3143",sound:"pp"},{letter:"\u3141",sound:"m"},{letter:"\u314e",sound:"h"},{letter:"\u3163",sound:"i"},{letter:"\u3154",sound:"e"},{letter:"\u3150",sound:"ae"},{letter:"\u314f",sound:"a"},{letter:"\u3157",sound:"o"},{letter:"\u315c",sound:"u"},{letter:"\u3153",sound:"eo"},{letter:"\u3161",sound:"eu"},{letter:"\u315a",sound:"oe"},{letter:"\u315f",sound:"wi"}],hangulc:[{letter:"\u3131",sound:"g"},{letter:"\u314b",sound:"k"},{letter:"\u3132",sound:"kk"},{letter:"\u3147",sound:"ng"},{letter:"\u3137",sound:"d"},{letter:"\u314c",sound:"t"},{letter:"\u3145",sound:"s"},{letter:"\u3146",sound:"ss"},{letter:"\u3148",sound:"j"},{letter:"\u314a",sound:"ch"},{letter:"\u3138",sound:"tt"},{letter:"\u3149",sound:"jj"},{letter:"\u3134",sound:"n"},{letter:"\u3139",sound:"r"},{letter:"\u3142",sound:"b"},{letter:"\u314d",sound:"p"},{letter:"\u3143",sound:"pp"},{letter:"\u3141",sound:"m"},{letter:"\u314e",sound:"h"}],hangulconsonant:[{letter:"\u3131",sound:"g"},{letter:"\u314b",sound:"k"},{letter:"\u3132",sound:"kk"},{letter:"\u3147",sound:"ng"},{letter:"\u3137",sound:"d"},{letter:"\u314c",sound:"t"},{letter:"\u3145",sound:"s"},{letter:"\u3146",sound:"ss"},{letter:"\u3148",sound:"j"},{letter:"\u314a",sound:"ch"},{letter:"\u3138",sound:"tt"},{letter:"\u3149",sound:"jj"},{letter:"\u3134",sound:"n"},{letter:"\u3139",sound:"r"},{letter:"\u3142",sound:"b"},{letter:"\u314d",sound:"p"},{letter:"\u3143",sound:"pp"},{letter:"\u3141",sound:"m"},{letter:"\u314e",sound:"h"}],hangulv:[{letter:"\u3163",sound:"i"},{letter:"\u3154",sound:"e"},{letter:"\u3150",sound:"ae"},{letter:"\u314f",sound:"a"},{letter:"\u3157",sound:"o"},{letter:"\u315c",sound:"u"},{letter:"\u3153",sound:"eo"},{letter:"\u3161",sound:"eu"},{letter:"\u315a",sound:"oe"},{letter:"\u315f",sound:"wi"}],hangulvowel:[{letter:"\u3163",sound:"i"},{letter:"\u3154",sound:"e"},{letter:"\u3150",sound:"ae"},{letter:"\u314f",sound:"a"},{letter:"\u3157",sound:"o"},{letter:"\u315c",sound:"u"},{letter:"\u3153",sound:"eo"},{letter:"\u3161",sound:"eu"},{letter:"\u315a",sound:"oe"},{letter:"\u315f",sound:"wi"}],hiragana:[{letter:"\u3042",sound:"a"},{letter:"\u3044",sound:"i"},{letter:"\u3046",sound:"u"},{letter:"\u3048",sound:"e"},{letter:"\u304a",sound:"o"},{letter:"\u304b",sound:"ka"},{letter:"\u304d",sound:"ki"},{letter:"\u304f",sound:"ku"},{letter:"\u3051",sound:"ke"},{letter:"\u3053",sound:"ko"},{letter:"\u304c",sound:"ga"},{letter:"\u304e",sound:"gi"},{letter:"\u3050",sound:"gu"},{letter:"\u3052",sound:"ge"},{letter:"\u3054",sound:"go"},{letter:"\u3055",sound:"sa"},{letter:"\u3057",sound:"shi"},{letter:"\u3059",sound:"su"},{letter:"\u305b",sound:"se"},{letter:"\u305d",sound:"so"},{letter:"\u3056",sound:"za"},{letter:"\u3058",sound:"ji"},{letter:"\u305a",sound:"zu"},{letter:"\u305c",sound:"ze"},{letter:"\u305e",sound:"zo"},{letter:"\u305f",sound:"ta"},{letter:"\u3061",sound:"chi"},{letter:"\u3064",sound:"tsu"},{letter:"\u3066",sound:"te"},{letter:"\u3068",sound:"to"},{letter:"\u3060",sound:"da"},{letter:"\u3067",sound:"de"},{letter:"\u3069",sound:"do"},{letter:"\u306a",sound:"na"},{letter:"\u306b",sound:"ni"},{letter:"\u306c",sound:"nu"},{letter:"\u306d",sound:"ne"},{letter:"\u306e",sound:"no"},{letter:"\u306f",sound:"ha"},{letter:"\u3072",sound:"hi"},{letter:"\u3075",sound:"fu"},{letter:"\u3078",sound:"he"},{letter:"\u307b",sound:"ho"},{letter:"\u3070",sound:"ba"},{letter:"\u3073",sound:"bi"},{letter:"\u3076",sound:"bu"},{letter:"\u3079",sound:"be"},{letter:"\u307c",sound:"bo"},{letter:"\u3071",sound:"pa"},{letter:"\u3074",sound:"pi"},{letter:"\u3077",sound:"pu"},{letter:"\u307a",sound:"pe"},{letter:"\u307d",sound:"po"},{letter:"\u307e",sound:"ma"},{letter:"\u307f",sound:"mi"},{letter:"\u3080",sound:"mu"},{letter:"\u3081",sound:"me"},{letter:"\u3082",sound:"mo"},{letter:"\u3084",sound:"ya"},{letter:"\u3086",sound:"yu"},{letter:"\u3088",sound:"yo"},{letter:"\u3089",sound:"ra"},{letter:"\u308a",sound:"ri"},{letter:"\u308b",sound:"ru"},{letter:"\u308c",sound:"re"},{letter:"\u308d",sound:"ro"},{letter:"\u308f",sound:"wa"},{letter:"\u3092",sound:"wo"},{letter:"\u3093",sound:"n"}],hiraganaa:[{letter:"\u3042",sound:"a"},{letter:"\u3044",sound:"i"},{letter:"\u3046",sound:"u"},{letter:"\u3048",sound:"e"},{letter:"\u304a",sound:"o"}],hiraganak:[{letter:"\u304b",sound:"ka"},{letter:"\u304d",sound:"ki"},{letter:"\u304f",sound:"ku"},{letter:"\u3051",sound:"ke"},{letter:"\u3053",sound:"ko"}],hiraganag:[{letter:"\u304c",sound:"ga"},{letter:"\u304e",sound:"gi"},{letter:"\u3050",sound:"gu"},{letter:"\u3052",sound:"ge"},{letter:"\u3054",sound:"go"}],hiraganas:[{letter:"\u3055",sound:"sa"},{letter:"\u3057",sound:"shi"},{letter:"\u3059",sound:"su"},{letter:"\u305b",sound:"se"},{letter:"\u305d",sound:"so"}],hiraganaz:[{letter:"\u3056",sound:"za"},{letter:"\u3058",sound:"ji"},{letter:"\u305a",sound:"zu"},{letter:"\u305c",sound:"ze"},{letter:"\u305e",sound:"zo"}],hiraganat:[{letter:"\u305f",sound:"ta"},{letter:"\u3061",sound:"chi"},{letter:"\u3064",sound:"tsu"},{letter:"\u3066",sound:"te"},{letter:"\u3068",sound:"to"}],hiraganad:[{letter:"\u3060",sound:"da"},{letter:"\u3067",sound:"de"},{letter:"\u3069",sound:"do"}],hiraganan:[{letter:"\u306a",sound:"na"},{letter:"\u306b",sound:"ni"},{letter:"\u306c",sound:"nu"},{letter:"\u306d",sound:"ne"},{letter:"\u306e",sound:"no"}],hiraganah:[{letter:"\u306f",sound:"ha"},{letter:"\u3072",sound:"hi"},{letter:"\u3075",sound:"fu"},{letter:"\u3078",sound:"he"},{letter:"\u307b",sound:"ho"}],hiraganab:[{letter:"\u3070",sound:"ba"},{letter:"\u3073",sound:"bi"},{letter:"\u3076",sound:"bu"},{letter:"\u3079",sound:"be"},{letter:"\u307c",sound:"bo"}],hiraganap:[{letter:"\u3071",sound:"pa"},{letter:"\u3074",sound:"pi"},{letter:"\u3077",sound:"pu"},{letter:"\u307a",sound:"pe"},{letter:"\u307d",sound:"po"}],hiraganam:[{letter:"\u307e",sound:"ma"},{letter:"\u307f",sound:"mi"},{letter:"\u3080",sound:"mu"},{letter:"\u3081",sound:"me"},{letter:"\u3082",sound:"mo"}],hiraganay:[{letter:"\u3084",sound:"ya"},{letter:"\u3086",sound:"yu"},{letter:"\u3088",sound:"yo"}],hiraganar:[{letter:"\u3089",sound:"ra"},{letter:"\u308a",sound:"ri"},{letter:"\u308b",sound:"ru"},{letter:"\u308c",sound:"re"},{letter:"\u308d",sound:"ro"}],hiraganaw:[{letter:"\u308f",sound:"wa"},{letter:"\u3092",sound:"wo"}],katakana:[{letter:"\u30a2",sound:"a"},{letter:"\u30a4",sound:"i"},{letter:"\u30a6",sound:"u"},{letter:"\u30a8",sound:"e"},{letter:"\u30aa",sound:"o"},{letter:"\u30ab",sound:"ka"},{letter:"\u30ad",sound:"ki"},{letter:"\u30af",sound:"ku"},{letter:"\u30b1",sound:"ke"},{letter:"\u30b3",sound:"ko"},{letter:"\u30ac",sound:"ga"},{letter:"\u30ae",sound:"gi"},{letter:"\u30b0",sound:"gu"},{letter:"\u30b2",sound:"ge"},{letter:"\u30b4",sound:"go"},{letter:"\u30b5",sound:"sa"},{letter:"\u30b7",sound:"shi"},{letter:"\u30b9",sound:"su"},{letter:"\u30bb",sound:"se"},{letter:"\u30bd",sound:"so"},{letter:"\u30b6",sound:"za"},{letter:"\u30b8",sound:"ji"},{letter:"\u30ba",sound:"zu"},{letter:"\u30bc",sound:"ze"},{letter:"\u30be",sound:"zo"},{letter:"\u30bf",sound:"ta"},{letter:"\u30c1",sound:"chi"},{letter:"\u30c4",sound:"tsu"},{letter:"\u30c6",sound:"te"},{letter:"\u30c8",sound:"to"},{letter:"\u30c0",sound:"da"},{letter:"\u30c7",sound:"de"},{letter:"\u30c9",sound:"do"},{letter:"\u30ca",sound:"na"},{letter:"\u30cb",sound:"ni"},{letter:"\u30cc",sound:"nu"},{letter:"\u30cd",sound:"ne"},{letter:"\u30ce",sound:"no"},{letter:"\u30cf",sound:"ha"},{letter:"\u30d2",sound:"hi"},{letter:"\u30d5",sound:"fu"},{letter:"\u30d8",sound:"he"},{letter:"\u30db",sound:"ho"},{letter:"\u30d0",sound:"ba"},{letter:"\u30d3",sound:"bi"},{letter:"\u30d6",sound:"bu"},{letter:"\u30d9",sound:"be"},{letter:"\u30dc",sound:"bo"},{letter:"\u30d1",sound:"pa"},{letter:"\u30d4",sound:"pi"},{letter:"\u30d7",sound:"pu"},{letter:"\u30da",sound:"pe"},{letter:"\u30dd",sound:"po"},{letter:"\u30de",sound:"ma"},{letter:"\u30df",sound:"mi"},{letter:"\u30e0",sound:"mu"},{letter:"\u30e1",sound:"me"},{letter:"\u30e2",sound:"mo"},{letter:"\u30e4",sound:"ya"},{letter:"\u30e6",sound:"yu"},{letter:"\u30e8",sound:"yo"},{letter:"\u30e9",sound:"ra"},{letter:"\u30ea",sound:"ri"},{letter:"\u30eb",sound:"ru"},{letter:"\u30ec",sound:"re"},{letter:"\u30ed",sound:"ro"},{letter:"\u30ef",sound:"wa"},{letter:"\u30f2",sound:"wo"},{letter:"\u30f3",sound:"n"}],katakanaa:[{letter:"\u30a2",sound:"a"},{letter:"\u30a4",sound:"i"},{letter:"\u30a6",sound:"u"},{letter:"\u30a8",sound:"e"},{letter:"\u30aa",sound:"o"}],katakanak:[{letter:"\u30ab",sound:"ka"},{letter:"\u30ad",sound:"ki"},{letter:"\u30af",sound:"ku"},{letter:"\u30b1",sound:"ke"},{letter:"\u30b3",sound:"ko"}],katakanag:[{letter:"\u30ac",sound:"ga"},{letter:"\u30ae",sound:"gi"},{letter:"\u30b0",sound:"gu"},{letter:"\u30b2",sound:"ge"},{letter:"\u30b4",sound:"go"}],katakanas:[{letter:"\u30b5",sound:"sa"},{letter:"\u30b7",sound:"shi"},{letter:"\u30b9",sound:"su"},{letter:"\u30bb",sound:"se"},{letter:"\u30bd",sound:"so"}],katakanaz:[{letter:"\u30b6",sound:"za"},{letter:"\u30b8",sound:"ji"},{letter:"\u30ba",sound:"zu"},{letter:"\u30bc",sound:"ze"},{letter:"\u30be",sound:"zo"}],katakanat:[{letter:"\u30bf",sound:"ta"},{letter:"\u30c1",sound:"chi"},{letter:"\u30c4",sound:"tsu"},{letter:"\u30c6",sound:"te"},{letter:"\u30c8",sound:"to"}],katakanad:[{letter:"\u30c0",sound:"da"},{letter:"\u30c7",sound:"de"},{letter:"\u30c9",sound:"do"}],katakanan:[{letter:"\u30ca",sound:"na"},{letter:"\u30cb",sound:"ni"},{letter:"\u30cc",sound:"nu"},{letter:"\u30cd",sound:"ne"},{letter:"\u30ce",sound:"no"}],katakanah:[{letter:"\u30cf",sound:"ha"},{letter:"\u30d2",sound:"hi"},{letter:"\u30d5",sound:"fu"},{letter:"\u30d8",sound:"he"},{letter:"\u30db",sound:"ho"}],katakanab:[{letter:"\u30d0",sound:"ba"},{letter:"\u30d3",sound:"bi"},{letter:"\u30d6",sound:"bu"},{letter:"\u30d9",sound:"be"},{letter:"\u30dc",sound:"bo"}],katakanap:[{letter:"\u30d1",sound:"pa"},{letter:"\u30d4",sound:"pi"},{letter:"\u30d7",sound:"pu"},{letter:"\u30da",sound:"pe"},{letter:"\u30dd",sound:"po"}],katakanam:[{letter:"\u30de",sound:"ma"},{letter:"\u30df",sound:"mi"},{letter:"\u30e0",sound:"mu"},{letter:"\u30e1",sound:"me"},{letter:"\u30e2",sound:"mo"}],katakanay:[{letter:"\u30e4",sound:"ya"},{letter:"\u30e6",sound:"yu"},{letter:"\u30e8",sound:"yo"}],katakanar:[{letter:"\u30e9",sound:"ra"},{letter:"\u30ea",sound:"ri"},{letter:"\u30eb",sound:"ru"},{letter:"\u30ec",sound:"re"},{letter:"\u30ed",sound:"ro"}],katakanaw:[{letter:"\u30ef",sound:"wa"},{letter:"\u30f2",sound:"wo"}]};var a=r.a.createElement("div",null,'"bopomofo","commands","cat ryan","draw card","flip coin","git gud","hangul","hiragana","katakana","quote","roll die","roll dice"'),l=r.a.createElement("div",null,r.a.createElement("input",{type:"file",name:"file"}));return n.commands={cmd:a,command:a,commands:a,catryan:r.a.createElement("div",{style:{textAlign:"left",marginLeft:"50px"}},r.a.createElement("samp",null,'"ryan":\xa0{',r.a.createElement("br",null),'\xa0"name":\xa0"ryan royal tong",',r.a.createElement("br",null),'\xa0"education":\xa0{',r.a.createElement("br",null),'\xa0\xa0"university":\xa0"uc davis",',r.a.createElement("br",null),'\xa0\xa0"degree":\xa0"b.s., computer science"',r.a.createElement("br",null),"\xa0},",r.a.createElement("br",null),'\xa0"interests":\xa0["cats", "reddit", "youtube", "martial arts", "digital art", "video games"],',r.a.createElement("br",null),'\xa0"favorite":\xa0{',r.a.createElement("br",null),'\xa0\xa0"color":\xa0"green",',r.a.createElement("br",null),'\xa0\xa0"invention":\xa0"microwave oven",',r.a.createElement("br",null),'\xa0\xa0"food":\xa0"noodles",',r.a.createElement("br",null),'\xa0\xa0"drink":\xa0"water",',r.a.createElement("br",null),'\xa0\xa0"ice cream":\xa0"mint",',r.a.createElement("br",null),'\xa0\xa0"language":\xa0"python",',r.a.createElement("br",null),'\xa0\xa0"instrument":\xa0"computer"',r.a.createElement("br",null),"\xa0}",r.a.createElement("br",null),"}")),gitgud:r.a.createElement("div",{style:{textAlign:"left",marginLeft:"50px"}},"git: 'gud' is not a git command. See 'git --help'.",r.a.createElement("br",null),r.a.createElement("br",null),"The most similar command is",r.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0gui"),gitgui:r.a.createElement("div",null,r.a.createElement("a",{href:"https://git-scm.com/docs/git-gui"},r.a.createElement("img",{src:"images/gitgui.png",alt:"gitgui"}))),quote:r.a.createElement("div",null,'"quote aki","quote akira","quote alan","quote amy","quote andrew","quote bruce lee","quote calvin","quote donnie yen","quote jackie chan","quote justin","quote matthew","quote melanie","quote nick","quote sandra","quote sunny","quote vincent","quote wendy"'),ts:l,txt:l,text:l,textsplit:l,textsplitter:l},n.modeCommands={bopomofo:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit',r.a.createElement("br",null),r.a.createElement("br",null),'after exiting, type "bopomofo" followed by a category (consonant, vowel)'),bopomofoc:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),bopomofoconsonant:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),bopomofov:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),bopomofovowel:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hangul:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit',r.a.createElement("br",null),r.a.createElement("br",null),'after exiting, type "hangul" followed by a category (consonant, vowel)'),hangulconsonant:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hangulc:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hangulvowel:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hangulv:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiragana:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit',r.a.createElement("br",null),r.a.createElement("br",null),'after exiting, type "hiragana" followed by a letter (a, k, g, s, z, t, d, n ,h, b, p, y, r, w)'),hiraganaa:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganak:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganag:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganas:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganaz:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganat:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganad:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganan:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganah:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganab:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganap:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganam:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganay:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganar:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),hiraganaw:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakana:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit',r.a.createElement("br",null),r.a.createElement("br",null),'after exiting, type "katakana" followed by a letter (a, k, g, s, z, t, d, n ,h, b, p, y, r, w)'),katakanaa:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanak:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanag:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanas:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanaz:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanat:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanad:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanan:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanah:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanab:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanap:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanam:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanay:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanar:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit'),katakanaw:r.a.createElement("div",null,"press enter to start!",r.a.createElement("br",null),'type "exit" to exit')},n.mode=0,n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleCommandKey",value:function(e){"ArrowUp"===e.key&&(document.getElementById("textBox").value=this.lastState.value,this.state.value=this.lastState.value)}},{key:"handleCommandLine",value:function(e){this.setState({value:e.target.value})}},{key:"handleCommandSubmit",value:function(e){e.preventDefault();var t=r.a.createElement("div",null,this.rngResponse.cardRank[Math.floor(Math.random()*this.rngResponse.cardRank.length)]," of ",this.rngResponse.cardSuit[Math.floor(Math.random()*this.rngResponse.cardSuit.length)]),n=r.a.createElement("div",null,1===Math.floor(2*Math.random())?"heads":"tails"),a=r.a.createElement("div",null,Math.floor(6*Math.random())+1),l=r.a.createElement("div",null,Math.floor(6*Math.random())+1,",",Math.floor(6*Math.random())+1),s=r.a.createElement("div",null,this.rngResponse.leekMode[Math.floor(Math.random()*this.rngResponse.leekMode.length)]),u=r.a.createElement("div",null,this.rngResponse.aki[Math.floor(Math.random()*this.rngResponse.aki.length)]),d=r.a.createElement("div",null,this.rngResponse.akira[Math.floor(Math.random()*this.rngResponse.akira.length)]),i=r.a.createElement("div",null,this.rngResponse.alan[Math.floor(Math.random()*this.rngResponse.alan.length)]),m=r.a.createElement("div",null,this.rngResponse.amy[Math.floor(Math.random()*this.rngResponse.amy.length)]),c=r.a.createElement("div",null,this.rngResponse.andrew[Math.floor(Math.random()*this.rngResponse.andrew.length)]),h=r.a.createElement("div",null,this.rngResponse.bruceLee[Math.floor(Math.random()*this.rngResponse.bruceLee.length)]),g=r.a.createElement("div",null,this.rngResponse.calvin[Math.floor(Math.random()*this.rngResponse.calvin.length)]),p=r.a.createElement("div",null,this.rngResponse.donnieYen[Math.floor(Math.random()*this.rngResponse.donnieYen.length)]),E=r.a.createElement("div",null,this.rngResponse.jackieChan[Math.floor(Math.random()*this.rngResponse.jackieChan.length)]),b=r.a.createElement("div",null,this.rngResponse.justin[Math.floor(Math.random()*this.rngResponse.justin.length)]),k=r.a.createElement("div",null,this.rngResponse.matthew[Math.floor(Math.random()*this.rngResponse.matthew.length)]),y=r.a.createElement("div",null,this.rngResponse.melanie[Math.floor(Math.random()*this.rngResponse.melanie.length)]),v=r.a.createElement("div",null,this.rngResponse.nick[Math.floor(Math.random()*this.rngResponse.nick.length)]),f=r.a.createElement("div",null,this.rngResponse.sandra[Math.floor(Math.random()*this.rngResponse.sandra.length)]),w=r.a.createElement("div",null,this.rngResponse.sunny[Math.floor(Math.random()*this.rngResponse.sunny.length)]),x=r.a.createElement("div",null,this.rngResponse.vincent[Math.floor(Math.random()*this.rngResponse.vincent.length)]),j=r.a.createElement("div",null,this.rngResponse.wendy[Math.floor(Math.random()*this.rngResponse.wendy.length)]);if(this.rngCommands={draw:t,card:t,dc:t,drawcard:t,flip:n,coin:n,fc:n,flipcoin:n,roll:a,die:a,rd:a,rolldie:a,dice:l,rolldice:l,leek:s,leekmode:s,aki:u,quoteaki:u,akira:d,quoteakira:d,alan:i,quotealan:i,amy:m,quoteamy:m,andrew:c,quoteandrew:c,brucelee:h,quotebrucelee:h,calvin:g,quotecalvin:g,donnieyen:p,quotedonnieyen:p,jackiechan:E,quotejackiechan:E,justin:b,quotejustin:b,matthew:k,quotematthew:k,melanie:y,quotemelanie:y,nick:v,quotenick:v,sandra:f,quotesandra:f,sunny:w,quotesunny:w,vincent:x,quotevincent:x,wendy:j,quotewendy:j},0!==this.mode){if("exit"===this.state.value.toLowerCase().split(" ").join(""))this.mode=0,o.a.render(r.a.createElement("div",null,"exited!"),document.getElementById("commandResult"));else if(this.modeCommands.hasOwnProperty(this.mode)){var M=Math.floor(Math.random()*this.modeDict[this.mode].length);this.state.value.toLowerCase().split(" ").join("")===this.modeDict[this.mode][this.lastRandom].sound&&(document.body.style="background: #114411; transition: background-color .3s ease-out;",setTimeout(function(){document.body.style="background: #141219; transition: background-color .6s ease-out;"},500)),this.lastRandom=M,o.a.render(this.modeDict[this.mode][M].letter,document.getElementById("commandResult"))}}else this.commands.hasOwnProperty(this.state.value.toLowerCase().split(" ").join(""))?o.a.render(this.commands[this.state.value.toLowerCase().split(" ").join("")],document.getElementById("commandResult")):this.rngCommands.hasOwnProperty(this.state.value.toLowerCase().split(" ").join(""))?o.a.render(this.rngCommands[this.state.value.toLowerCase().split(" ").join("")],document.getElementById("commandResult")):this.modeCommands.hasOwnProperty(this.state.value.toLowerCase().split(" ").join(""))?(o.a.render(this.modeCommands[this.state.value.toLowerCase().split(" ").join("")],document.getElementById("commandResult")),this.mode=this.state.value.toLowerCase().split(" ").join("")):o.a.render(r.a.createElement("div",null,r.a.createElement("p",null,this.rngResponse.oops[Math.floor(Math.random()*this.rngResponse.oops.length)],"! that's not a command"),r.a.createElement("p",null,'try typing "commands" for a list of commands')),document.getElementById("commandResult"));""!==this.state.value&&(this.lastState=this.state),this.setState({value:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"mainComponent"},r.a.createElement("form",{className:"commandLine"},r.a.createElement("label",null,r.a.createElement("input",{className:"textBox",id:"textBox",type:"text",name:"name",value:this.state.value,onKeyDown:this.handleCommandKey,onChange:this.handleCommandLine})),r.a.createElement("input",{className:"textEnter",type:"submit",value:"\u21b5",onClick:this.handleCommandSubmit})),r.a.createElement("div",{className:"commandResult",id:"commandResult"},r.a.createElement("p",null,"hi"),r.a.createElement("p",null,"my name is ryan and i am an object"),r.a.createElement("p",null,'try typing a command such as "cat ryan"')))}}]),t}(a.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("about",{className:"about"},r.a.createElement("div",{id:"welcome"},r.a.createElement("div",{id:"name"},r.a.createElement("p",null,"RYAN")),r.a.createElement("div",null,r.a.createElement("img",{id:"crown",src:"images/logo.png",alt:"logo"}),r.a.createElement("p",{id:"royalName"},"ROYAL")),r.a.createElement("div",{id:"name"},r.a.createElement("p",null,"TONG"))))}}]),t}(a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("button",{onClick:this.props.handleAbout},"don't feel like typing? click me!"))}}]),t}(a.Component),b=(n(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(i.a)(t).call(this))).state={showAbout:!1},e.handleAbout=e.handleAbout.bind(Object(c.a)(Object(c.a)(e))),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleAbout",value:function(e){this.setState({showAbout:!0})}},{key:"render",value:function(){var e=this.state.showAbout?{display:"none"}:{},t=this.state.showAbout?{display:"block"}:{display:"none"};return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("div",{style:e},r.a.createElement(g,null)),r.a.createElement("div",{style:t},r.a.createElement(p,null)),r.a.createElement("div",{style:e},r.a.createElement(E,{handleAbout:this.handleAbout,showAbout:this.state.showAbout})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.00cc68a9.chunk.js.map
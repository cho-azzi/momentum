const quotes=[
     {quote:"이대로라면 하루가 지나가구리...",author:"-너굴사장"},
     {quote:"너굴 은행 ATM 돈을 넣어봐구리!",author:"-너굴사장"},
     {quote:"간만에 운동하니 기분이 상쾌해요~ 뽀드득!",author:"-뽀야미"},
     {quote:"이렇게 뵈니 정말 기뻐요 뽀드득~!",author:"-뽀야미"},
     {quote:"오! 너, 이 섬 사람이냐? 반갑다-! 부스럭-!",author:"-하이드"},
     {quote:"수령을 위해서 준비했다구! 부스럭",author:"-하이드"},
     {quote:"오늘은 이만하고 끌까?",author:"-수령"},
     {quote:"앗 시간이 모자라구리!",author:"-너굴사장"},
     {quote:"엉성한 하루를 만들어볼까?",author:"-수령"},
     {quote:"엉성한 과제를 완성했다!",author:"-수령"},
     {quote:"섬 주민들을 위해 힘써줘구리!",author:"-너굴사장"},
     {quote:"이렇게 시간만 있으면 쉽게 할 수 있어구리",author:"-너굴사장"},
     {quote:"시간 말씀이시군요! 가격은... 5,000,000벨입니다-!",author:"-콩돌이"},
     {quote:"부드러운 수제 과제를 완성했다!",author:"-수령"}
]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;
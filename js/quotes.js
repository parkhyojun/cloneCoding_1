const quotes = [
    {
       quote: "어떤 사람들은 3루에 태어났지만 자신이 3루타를 쳤다고 생각하면서 인생을 산다.",
       author: "Barry Switer",
    },
    {
        quote:"인생은 사람들 앞에서 바이올린을 켜면서 바이올린을 배우는 것과 같다.",
        author:"Samuel Bulter",
    },
    {
        quote:"나는 폭풍이 두렵지 않다. 나의 배로 항해하는 법을 배우고 있으니까.",
        author:"Helen Keller",
    },
    {
        quote:"사랑하는 것은 천국을 살짝 엿보는 것이다.",
        author:"Karen Sunde",
    },
    {
        quote:"인간의 감정은 누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.",
        author:"Jean Paul Richter",
    },
    {
        quote:"작별 인사에 낙담하지 말라. 재회에 앞서 작별은 필요하다. 그리고 친구라면 잠시 혹은 오랜 뒤라도 꼭 재회하게 될 터이니.",
        author:"Richard Bach",
    },
    {
        quote:"행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
        author:"Genghis Khan",
    },
    {
        quote:"천재란 자신에게 주어진 일을 하는 재능 있는 사람일 뿐이다.",
        author:"Tomas A Edison",
    },
    {
        quote:"어른이 된다는 것은 사춘기로부터의 일시적 휴식에 불과하다.",
        author:"Jules Feiffer",
    },
    {
        quote:"20대에는 의지, 30대에는 기지, 40대에는 판단이 지배한다.",
        author:"Benjamin Franklin",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote =quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
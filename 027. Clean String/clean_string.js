const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

sensitive_chars = ['%', '$', '@', '&', ';'];

sensitive_chars.forEach(element => {
    sentence.replace(element, "");
});

console.log(sentence)

var wordCounts = { };
var words = sentence.split(/\b/);

for(var i = 0; i < words.length; i++)
    wordCounts["_" + words[i].toLowerCase()] = (wordCounts["_" + words[i].toLowerCase()] || 0) + 1;
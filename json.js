
let str =  ` {
        "problemset":   [
            {"contest":"CROC Open Moscow Tournament", "Topic":"Brute Force"},
            {"contest":"Codeforces Round 1024", "Topic":"Greedy"}
            ]
}`;

let obj = JSON.parse(str);
let obj1 = { "problemset":"3000", "platform":"Codeforces", "rating":"Newbie"};
console.log(JSON.stringify(obj1))




let str =  ` {
        "problemset":   [
            {"contest":"CROC Open Moscow Tournament", "Topic":"Brute Force"},
            {"contest":"Codeforces Round 1024", "Topic":"Greedy"}
            ]
}`;

let obj = JSON.parse(str);
 
for(let i=0; i<2; i++){
        console.log("The problem was from the contest " + obj.problemset[i].contest + " and it was of topic " +  obj.problemset[i].Topic);         
}



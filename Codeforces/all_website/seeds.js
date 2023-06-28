const mongoose=require("mongoose");
const Problem = require("./models/index.js");

mongoose.connect('mongodb://127.0.0.1:27017/Codeforces',{useNewUrlParser:true})
.then(()=>{
    console.log(" MONGO CONNECTION IS ONNN!!!");
})
.catch(err=>{
    console.log("OH NOO MONGO ERROR!!!!!");
    console.log(err)
})

Problem.insertMany([
    {
    
        name: "Who's Opposite?",
        link: 'https://codeforces.com/problemset/problem/1560/B',
        level: 800,
        website: 'Codeforces',
        topics: [ 'math' ],
        
      },
      {
        
        name: 'File Name',
        link: 'https://codeforces.com/problemset/problem/978/B',
        level: 800,
        website: 'Codeforces',
        topics: [ 'greedy', 'strings' ],
        
      },
      {
        
        name: 'Advantage',
        link: 'https://codeforces.com/problemset/problem/1760/C',
        level: 800,
        website: 'Codeforces',
        topics: [ 'data_structures', 'implementation', 'sortings' ],
        
      },
      {
       
        name: "I'm bored with life",
        link: 'https://codeforces.com/problemset/problem/822/A',
        level: 800,
        website: 'Codeforces',
        topics: [ 'implementation', 'math', 'number_theory' ],
        
      },
      {
        
        name: 'The Cake Is a Lie',
        link: 'https://codeforces.com/problemset/problem/1519/B',
        level: 800,
        website: 'Codeforces',
        topics: [ 'dp', 'math' ],
        
      },
      {
        
        name: 'Anton and Digits',
        link: 'https://codeforces.com/problemset/problem/734/B',
        level: 800,
        website: 'Codeforces',
        topics: [ 'greedy', 'implementation', 'math' ],
        
      },
      {
        
        name: 'Password',
        link: 'https://codeforces.com/problemset/problem/1743/A',
        level: 800,
        website: 'Codeforces',
        topics: [ 'implementation', 'math' ],
        
      },
      {
        
        name: 'Make it Beautiful',
        link: 'https://codeforces.com/problemset/problem/1783/A',
        level: 800,
        website: 'Codeforces',
        topics: [ 'math', 'sortings' ],
        
      },
      {
        
        name: 'GCD Arrays',
        link: 'https://codeforces.com/problemset/problem/1629/B',
        level: 800,
        website: 'Codeforces',
        topics: [ 'greedy', 'math', 'number_theory' ],
        
      },
      {
        
        name: 'New Palindrome',
        link: 'https://codeforces.com/problemset/problem/1832/A',
        level: 800,
        website: 'Codeforces',
        topics: [ 'strings' ],
        
      },
      {
        
        name: 'Phoenix and Gold',
        link: 'https://codeforces.com/problemset/problem/1515/A',
        level: 800,
        website: 'Codeforces',
        topics: [ 'greedy', 'math' ],
        
      },
      {
       
        name: 'Gravity Flip',
        link: 'https://codeforces.com/problemset/problem/405/A',
        level: 900,
        website: 'Codeforces',
        topics: [ 'greedy', 'implementation', 'sortings' ],
       
      },
      {
        
        name: 'Array Reodering',
        link: 'https://codeforces.com/problemset/problem/1535/B',
        level: 900,
        website: 'Codeforces',
        topics: [ 'greedy', 'math', 'sortings', 'number_theory' ],
        
      },
      {
        
        name: 'AB Balance',
        link: 'https://codeforces.com/problemset/problem/1606/A',
        level: 900,
        website: 'Codeforces',
        topics: [ 'strings' ],
        
      },
      {
        
        name: 'Lunar New Year and Number Division',
        link: 'https://codeforces.com/problemset/problem/1106/C',
        level: 900,
        website: 'Codeforces',
        topics: [ 'greedy', 'implementation', 'math', 'sortings' ],
      },
      {
        name: 'Radio Station',
        link: 'https://codeforces.com/problemset/problem/918/B',
        level: 900,
        website: 'Codeforces',
        topics: [ 'implementation', 'strings' ],
      },
      {
        name: 'Digits Sequence Dividing',
        link: 'https://codeforces.com/problemset/problem/1107/A',
        level: 900,
        website: 'Codeforces',
        topics: [ 'greedy', 'strings' ],
      },
      {
        name: 'Metro',
        link: 'https://codeforces.com/problemset/problem/1055/A',
        level: 900,
        website: 'Codeforces',
        topics: [ 'graphs' ],   
      },
      {
        //_id: ObjectId("64956a424bc763ff3b2b95b2"),
        name: 'Non-Substring Subsequence',
        link: 'https://codeforces.com/problemset/problem/1451/B',
        level: 900,
        website: 'Codeforces',
        topics: [ 'dp', 'greedy', 'implementation', 'strings' ],
        //__v: 0
      },
      {
       // _id: ObjectId("64956a424bc763ff3b2b95b3"),
        name: 'Napoleon Cake',
        link: 'https://codeforces.com/problemset/problem/1501/B',
        level: 900,
        website: 'Codeforces',
        topics: [ 'dp', 'implementation', 'sortings' ],
       // __v: 0
      },
      {
        //_id: ObjectId("64956a424bc763ff3b2b95b4"),
        name: 'Mystic Permutation',
        link: 'https://codeforces.com/problemset/problem/1689/B',
        level: 900,
        website: 'Codeforces',
        topics: [ 'data_structures', 'greedy' ],
        //__v: 0
      },
      {
        //_id: ObjectId("64956a424bc763ff3b2b95b5"),
        name: 'Sushi for Two',
        link: 'https://codeforces.com/problemset/problem/1138/A',
        level: 900,
        website: 'Codeforces',
        topics: [ 'binary_search', 'greedy', 'implementation' ],
        //__v: 0
      },
      {
        //_id: ObjectId("649572c14446bb931e6d1cea"),
        name: 'String Task',
        link: 'https://codeforces.com/problemset/problem/118/A',
        level: 1000,
        website: 'Codeforces',
        topics: [ 'implementation', 'strings' ],
        //__v: 0
      },
      {
        //_id: ObjectId("649572c14446bb931e6d1ceb"),
        name: 'New Year Transportation',
        link: 'https://codeforces.com/problemset/problem/500/A',
        level: 1000,
        website: 'Codeforces',
        topics: [ 'graphs', 'implementation' ],
        //__v: 0
      },
      {
        //_id: ObjectId("649572c14446bb931e6d1cec"),
        name: 'Mahmoud and a Triangle',
        link: 'https://codeforces.com/problemset/problem/766/B',
        level: 1000,
        website: 'Codeforces',
        topics: [ 'greedy', 'math', 'number_theory', 'sortings' ],
        //__v: 0
      },
      {
        //_id: ObjectId("649572c14446bb931e6d1ced"),
        name: 'Filling Shapes',
        link: 'https://codeforces.com/problemset/problem/1182/A',
        level: 1000,
        website: 'Codeforces',
        topics: [ 'dp', 'math' ],
        //__v: 0
      },
      {
        //_id: ObjectId("649572c14446bb931e6d1cee"),
        name: 'Infinite Replacement',
        link: 'https://codeforces.com/problemset/problem/1674/C',
        level: 1000,
        website: 'Codeforces',
        topics: [ 'implementation', 'strings' ],
        //__v: 0
      },
      {
        //_id: ObjectId("649572c14446bb931e6d1cef"),
        name: 'Polycarp Training',
        link: 'https://codeforces.com/problemset/problem/1165/B',
        level: 1000,
        website: 'Codeforces',
        topics: [ 'data_structures', 'greedy', 'sortings' ],
        //__v: 0
      },
      {
        //_id: ObjectId("649572c14446bb931e6d1cf0"),
        name: 'Sport Mafia',
        link: 'https://codeforces.com/problemset/problem/1195/B',
        level: 1000,
        website: 'Codeforces',
        topics: [ 'binary_search', 'math' ],
        //__v: 0
      },
      {
        //_id: ObjectId("649572c14446bb931e6d1cf1"),
        name: 'Points on Plane',
        link: 'https://codeforces.com/problemset/problem/1809/B',
        level: 1000,
        website: 'Codeforces',
        topics: [ 'binary_search', 'greedy', 'math' ],
        //__v: 0
      },
      {
        //_id: ObjectId("649572c14446bb931e6d1cf2"),
        name: 'Fox and Number Game',
        link: 'https://codeforces.com/problemset/problem/389/A',
        level: 1000,
        website: 'Codeforces',
        topics: [ 'math', 'greedy' ],
        //__v: 0
      }
    
])

.then(data=>{
    console.log('worked!!');
    console.log(data);
})


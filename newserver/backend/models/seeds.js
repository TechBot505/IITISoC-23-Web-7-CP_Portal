const mongoose = require('mongoose');
const Product = require('./Todo');


const url="mongodb+srv://akankshaprasad7458:Fe991QJCxG7kMLtL@cluster0.kug2arm.mongodb.net/";
const connection={
    useNewUrlParser:true,
    useUnifiedTopology: true,
};
mongoose.connect(url,connection)
.then(()=>{
    console.info("connected");
})
.catch((e)=>{
    console.log("err",e);
});
    // EJS
// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    // 
   
    Product.insertMany([
      {
        name:'Climbing Stairs',
        link:'https://leetcode.com/problems/climbing-stairs/',
        level:1,
        website:'Leetcode',
        topic:['math','dynamic programming']
    },
    {
        name: 'Gray code',
        link:'https://leetcode.com/problems/gray-code/',
        level:2,
        website:'Leetcode',
        topic:['math']
    },
    {
        name:'Max points on a line',
        link:'https://leetcode.com/problems/max-points-on-a-line/',
        levell:3,
        website:'Leetcode',
        topic:['math']
    },
    {
        name:'Happy number',
        link:'https://leetcode.com/problems/happy-number/',
        level:1,
        website:'Leetcode',
        topic:['math','two pointers']
    },
    {
        name:'Count Primes',
        link:'https://leetcode.com/problems/count-primes/',
        level:2,
        website:'Leetcode',
        topic:['math']
    },
    {
        name:'Basic calculator',
        link:'https://leetcode.com/problems/basic-calculator/',
        level:3,
        website:'Leetcode',
        topic:['math']
    },
    {
        name:'Power of two',
        link:'https://leetcode.com/problems/power-of-two/',
        level:1,
        website:'Leetcode',
        topic:['math']
    },
    {
        name:'Perfect squares',
        link:'https://leetcode.com/problems/perfect-squares/',
        level:2,
        website:'Leetcode',
        topic:['math']
    },
    {
        name:'Number of digit one',
        link:'https://leetcode.com/problems/number-of-digit-one/',
        level:3,
        website:'Leetcode',
        topic:['math']
    },
    {
        name:'Search insert position',
        link:'https://leetcode.com/problems/search-insert-position/',
        level:1,
        website:'Leetcode',
        topic:['binary search']
    },
    {
        name:'Search a 2D matrix',
        link:'https://leetcode.com/problems/search-a-2d-matrix/',
        level:2,
        website:'Leetcode',
        topic:['binary search']
    },
    {
        name:'Missing number',
        link:'https://leetcode.com/problems/missing-number/',
        level:1,
        website:'Leetcode',
        topic:['binary search','sorting']
    },
    {
        name:'Find the duplicate number',
        link:'https://leetcode.com/problems/find-the-duplicate-number/',
        level:2,
        website:'Leetcode',
        topic:['binary search']
    },
    {
        name:'Count of range sum',
        link:'https://leetcode.com/problems/count-of-range-sum/',
        level:3,
        website:'Leetcode',
        topic:['binary search']
    },
    {
        name:'Valid perfect square',
        link:'https://leetcode.com/problems/valid-perfect-square/',
        level:1,
        website:'Leetcode',
        topic:['binary search']
    },
    {
        name:'Find right interval',
        link:'https://leetcode.com/problems/find-right-interval/',
        level:2,
        website:'Leetcode',
        topic:['binary search']
    },
    {
        name:'Reverse pairs',
        link:'https://leetcode.com/problems/reverse-pairs/',
        level:3,
        website:'Leetcode',
        topic:['binary search']
    },
    {
        name:'Longest palindrome',
        link:'https://leetcode.com/problems/longest-palindrome/',
        level:1,
        website:'Leetcode',
        topic:['greedy']
    },
    {
        name:'Gas station',
        link:'https://leetcode.com/problems/gas-station/',
        level:2,
        website:'Leetcode',
        topic:['greedy']
    },
    {
        name:'Candy',
        link:'https://leetcode.com/problems/candy/',
        level:3,
        website:'Leetcode',
        topic:['greedy']
    },
    {
        name:'Assign cookies',
        link:'https://leetcode.com/problems/assign-cookies/',
        level:1,
        website:'Leetcode',
        topic:['greedy','sorting','two pointers']
    },
    {
        name:'Largest number',
        link:'https://leetcode.com/problems/largest-number/',
        level:2,
        website:'Leetcode',
        topic:['greedy','sorting']
    },
    {
        name:'Patching Array',
        link:'https://leetcode.com/problems/patching-array/',
        level:3,
        website:'Leetcode',
        topic:['greedy']
    },
    {
        name:'Array partition',
        link:'https://leetcode.com/problems/array-partition/',
        level:1,
        website:'Leetcode',
        topic:['greedy','sorting']
    },
    {
        name:'Boats to save people',
        link:'https://leetcode.com/problems/boats-to-save-people/',
        level:2,
        website:'Leetcode',
        topic:['greedy']
    },
    {
        name:'Stamping the sequence',
        link:'https://leetcode.com/problems/stamping-the-sequence/',
        level:3,
        website:'Leetcode',
        topic:['greedy']
    },
    {
        name:'Counting bits',
        link:'https://leetcode.com/problems/counting-bits/',
        level:1,
        website:'Leetcode',
        topic:['dynamic programming']
    },
    {
        name:'Integer break',
        link:'https://leetcode.com/problems/integer-break/',
        level:2,
        website:'Leetcode',
        topic:['dynamic programming']
    },
    {
        name:'Scramble string',
        link:'https://leetcode.com/problems/scramble-string/',
        level:3,
        website:'Leetcode',
        topic:['dynamic programming']
    },
    {
        name:'Is subsequence',
        link:'https://leetcode.com/problems/is-subsequence/',
        level:1,
        website:'Leetcode',
        topic:['dynamic programming']
    },
    {
        name:'Rotate function',
        link:'https://leetcode.com/problems/rotate-function/',
        level:2,
        website:'Leetcode',
        topic:['dynamic programming']
    },
    {
        name:'Frog jump',
        link:'https://leetcode.com/problems/frog-jump/',
        level:3,
        website:'Leetcode',
        topic:['dynamic programming']
    },
    {
        name:'Min cost climbing stairs',
        link:'https://leetcode.com/problems/min-cost-climbing-stairs/',
        level:1,
        website:'Leetcode',
        topic:['dynamic programming']
    },
    {
        name:'Largest plus sign',
        link:'https://leetcode.com/problems/largest-plus-sign/',
        level:2,
        website:'Leetcode',
        topic:['dynamic programming']
    },
    {
        name:'Cherry pickup',
        link:'https://leetcode.com/problems/cherry-pickup/',
        level:3,
        website:'Leetcode',
        topic:['dynamic programming']
    },
    {
        name:'Clone graph',
        link:'https://leetcode.com/problems/clone-graph/',
        level:2,
        website:'Leetcode',
        topic:['graph']
    },
    {
        name:'Longest increasing path in a matrix',
        link:'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/',
        level:3,
        website:'Leetcode',
        topic:['graph']
    },
    {
        name:'Evaluate division',
        link:'https://leetcode.com/problems/evaluate-division/',
        level:2,
        website:'Leetcode',
        topic:['graph']
    },
    {
        name:'Cracking the safe',
        link:'https://leetcode.com/problems/cracking-the-safe/',
        level:3,
        website:'Leetcode',
        topic:['graph']
    },
    {
        name:'Possible bipartition',
        link:'https://leetcode.com/problems/possible-bipartition/',
        level:2,
        website:'Leetcode',
        topic:['graph']
    },
    {
        name:'Cat and mouse',
        link:'https://leetcode.com/problems/cat-and-mouse/',
        level:3,
        website:'Leetcode',
        topic:['graph']
    },
    {
        name:'Find the town judge',
        link:'https://leetcode.com/problems/find-the-town-judge/',
        level:1,
        website:'Leetcode',
        topic:['graph']
    },
    {
        name:'Find center of star graph',
        link:'https://leetcode.com/problems/find-center-of-star-graph/',
        level:1,
        website:'Leetcode',
        topic:['graph']
    },
    {
        name:'Find if path exists in graph',
        link:'https://leetcode.com/problems/find-if-path-exists-in-graph/',
        level:1,
        website:'Leetcode',
        topic:['graph']
    },
    {
        name:'Majority element',
        link:'https://leetcode.com/problems/majority-element/',
        level:1,
        website:'Leetcode',
        topic:['sorting']
    },
    {
        name:'Sort list',
        link:'https://leetcode.com/problems/sort-list/',
        level:2,
        website:'Leetcode',
        topic:['sorting','two pointers']
    },
    {
        name:'Maximum gap',
        link:'https://leetcode.com/problems/maximum-gap/',
        level:3,
        website:'Leetcode',
        topic:['sorting']
    },
    {
        name:'Valid anagram',
        link:'https://leetcode.com/problems/valid-anagram/',
        level:1,
        website:'Leetcode',
        topic:['sorting']
    },
    {
        name:'H-index',
        link:'https://leetcode.com/problems/h-index/',
        level:2,
        website:'Leetcode',
        topic:['sorting']
    },
    {
        name:'Find median from data stream',
        link:'https://leetcode.com/problems/find-median-from-data-stream/',
        level:3,
        website:'Leetcode',
        topic:['sorting']
    },
    {
        name:'Find the difference',
        link:'https://leetcode.com/problems/find-the-difference/',
        level:1,
        website:'Leetcode',
        topic:['sorting']
    },
    {
        name:'Maximum ice cream bars',
        link:'https://leetcode.com/problems/maximum-ice-cream-bars/',
        level:2,
        website:'Leetcode',
        topic:['sorting']
    },
    {
        name:'Closest room',
        link:'https://leetcode.com/problems/closest-room/',
        level:3,
        website:'Leetcode',
        topic:['sorting']
    },
    {
        name:'Lexicographically smallest pallindrome',
        link:'https://leetcode.com/problems/lexicographically-smallest-palindrome/',
        level:1,
        website:'Leetcode',
        topic:['two pointers']
    },
    {
        name:'Find the maximum number of marked indices',
        link:'https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/',
        level:2,
        website:'Leetcode',
        topic:['two pointers']
    },
    {
        name:'Subsequence with the minimum score',
        link:'https://leetcode.com/problems/subsequence-with-the-minimum-score/',
        level:3,
        website:'Leetcode',
        topic:['two pointers']
    },
    {
        name:'Minimum common value',
        link:'https://leetcode.com/problems/minimum-common-value/',
        level:1,
        website:'Leetcode',
        topic:['two pointers']
    },
    {
        name:'Maximum total beauty of the gardens',
        link:'https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/',
        level:3,
        website:'Leetcode',
        topic:['two pointers']
    },
    {
        name:'Number of distinct averages',
        link:'https://leetcode.com/problems/number-of-distinct-averages/',
        level:1,
        website:'Leetcode',
        topic:['two pointers']
    },
    {
        name:'Rotating the box',
        link:'https://leetcode.com/problems/rotating-the-box/',
        level:2,
        website:'Leetcode',
        topic:['two pointers']
    },
    {
        name:'Largest merge of two strings',
        link:'https://leetcode.com/problems/largest-merge-of-two-strings/',
        level:2,
        website:'Leetcode',
        topic:['two pointers']
    },
    {
        name:'Trapping rain water',
        link:'https://leetcode.com/problems/trapping-rain-water/',
        level:3,
        website:'Leetcode',
        topic:['two pointers']
    },
    {
        name:'Find pivot index',
        link:'https://leetcode.com/problems/find-pivot-index/',
        level:1,
        website:'Leetcode',
        topic:['prefix sum']
    },
    {
        name:'Contiguous Array',
        link:'https://leetcode.com/problems/contiguous-array/',
        level:2,
        website:'Leetcode',
        topic:['prefix sum']
    },
    {
        name:'Split array largest sum',
        link:'https://leetcode.com/problems/split-array-largest-sum/',
        level:3,
        website:'Leetcode',
        topic:['prefix sum']
    },
    {
        name:'Minimum value to get positive step by step sum',
        link:'https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/',
        level:1,
        website:'Leetcode',
        topic:['prefix sum']
    },
    {
        name:'XOR queries of a subarray',
        link:'https://leetcode.com/problems/xor-queries-of-a-subarray/',
        level:2,
        website:'Leetcode',
        topic:['prefix sum']
    },
    {
        name:'Sum of floored pairs',
        link:'https://leetcode.com/problems/sum-of-floored-pairs/',
        level:3,
        website:'Leetcode',
        topic:['prefix sum']
    },
    {
        name:'Find the middle index in array',
        link:'https://leetcode.com/problems/find-the-middle-index-in-array/',
        level:1,
        website:'Leetcode',
        topic:['prefix sum']
    },
    {
        name:'Describe the painting',
        link:'https://leetcode.com/problems/describe-the-painting/',
        level:2,
        website:'Leetcode',
        topic:['prefix sum']
    },
    {
        name:'Minimum space wasted from packaging',
        link:'https://leetcode.com/problems/minimum-space-wasted-from-packaging/',
        level:3,
        website:'Leetcode',
        topic:['prefix sum']
    },

      {
    
            name: 'Advantage',
            link: 'https://codeforces.com/problemset/problem/1760/C',
            level: 800,
            website: 'Codeforces',
            topic: [ 'data_structures', 'implementation', 'sortings' ],
            
          },
          {
           
            name: "I'm bored with life",
            link: 'https://codeforces.com/problemset/problem/822/A',
            level: 800,
            website: 'Codeforces',
            topic: [ 'implementation', 'math', 'number_theory' ],
            
          },
          {
            
            name: 'The Cake Is a Lie',
            link: 'https://codeforces.com/problemset/problem/1519/B',
            level: 800,
            website: 'Codeforces',
            topic: [ 'dp', 'math' ],
            
          },
          {
            
            name: 'Anton and Digits',
            link: 'https://codeforces.com/problemset/problem/734/B',
            level: 800,
            website: 'Codeforces',
            topic: [ 'greedy', 'implementation', 'math' ],
            
          },
          {
            name: 'Two Sum',
            link: 'https://leetcode.com/problems/two-sum/',
            level: 1,
            website: 'Leetcode',
            topic: ['array']
        },
        {
            name:'Median of two sorted arrays',
            link:'https://leetcode.com/problems/median-of-two-sorted-arrays/',
            level: 3,
            website: 'Leetcode',
            topic:['array','binary search']
        },
        {
            name:'Container with most water',
            link:'https://leetcode.com/problems/container-with-most-water/',
            level: 2,
            website:'Leetcode',
            topic:['array','greedy','two pointers']
        },
      {
    
        name: 'Advantage',
        link: 'https://codeforces.com/problemset/problem/1760/C',
        level: 800,
        website: 'Codeforces',
        topic: [ 'data_structures', 'implementation', 'sortings' ],
        
      },
      {
       
        name: "I'm bored with life",
        link: 'https://codeforces.com/problemset/problem/822/A',
        level: 800,
        website: 'Codeforces',
        topic: [ 'implementation', 'math', 'number_theory' ],
        
      },
      {
        
        name: 'The Cake Is a Lie',
        link: 'https://codeforces.com/problemset/problem/1519/B',
        level: 800,
        website: 'Codeforces',
        topic: [ 'dp', 'math' ],
        
      },
      {
        
        name: 'Anton and Digits',
        link: 'https://codeforces.com/problemset/problem/734/B',
        level: 800,
        website: 'Codeforces',
        topic: [ 'greedy', 'implementation', 'math' ],
        
      },
        {
    
            name: 'Advantage',
            link: 'https://codeforces.com/problemset/problem/1760/C',
            level: 800,
            website: 'Codeforces',
            topic: [ 'data_structures', 'implementation', 'sortings' ],
            
          },
          {
           
            name: "I'm bored with life",
            link: 'https://codeforces.com/problemset/problem/822/A',
            level: 800,
            website: 'Codeforces',
            topic: [ 'implementation', 'math', 'number_theory' ],
            
          },
          {
            
            name: 'The Cake Is a Lie',
            link: 'https://codeforces.com/problemset/problem/1519/B',
            level: 800,
            website: 'Codeforces',
            topic: [ 'dp', 'math' ],
            
          },
          {
            
            name: 'Anton and Digits',
            link: 'https://codeforces.com/problemset/problem/734/B',
            level: 800,
            website: 'Codeforces',
            topic: [ 'greedy', 'implementation', 'math' ],
            
          },
          {
            
            name: 'Password',
            link: 'https://codeforces.com/problemset/problem/1743/A',
            level: 800,
            website: 'Codeforces',
            topic: [ 'implementation', 'math' ],
            
          },
        { name:'My very 1st contest',link:'https://www.codechef.com/problems/MY1STCONTEST',level:284,website:'Codechef',topic:['math'] },
        { name:'EmailRemainders',link:'https://www.codechef.com/problems/EMAILREM',level:379,website:'Codechef',topic:['math'] },
        { name:'Chef and Instant Noodles',link:'https://www.codechef.com/problems/INSTNOODLE',level:456,website:'Codechef',topic:['math'] },
        { name:'Count the Notebooks',link:'https://www.codechef.com/problems/NOTEBOOK',level:563,website:'Codechef',topic:['math'] },
        { name:'Chef and Water Bottles',link:'https://www.codechef.com/problems/CHEFBOTTLE',level:662,website:'Codechef',topic:['math'] },
        { name:'Black cells in a chessboard',link:'https://www.codechef.com/problems/BLACKCEL',level:746,website:'Codechef',topic:['math'] },
        { name:'Summer Heat',link:'https://www.codechef.com/problems/COCONUT',level:852,website:'Codechef',topic:['math'] },
        { name:'Ciel and Receipt',link:'https://www.codechef.com/problems/CIELRCPT',level:936,website:'Codechef',topic:['math','greedy algorithm'] },
        { name:'Puppy and Sum',link:'https://www.codechef.com/problems/PPSUM',level:961,website:'Codechef',topic:['math','basic programming'] },
        { name:'Playing With Matches',link:'https://www.codechef.com/problems/MATCHES',level:986,website:'Codechef',topic:['array','data structure'] },
        { name:'Turbo Sort',link:'https://www.codechef.com/problems/TSORT',level:667,website:'Codechef',topic:['sorting','data structure'] },
        { name:'Chef and Lockout draws',link:'https://www.codechef.com/problems/LOCKDRAW',level:982,website:'Codechef',topic:['sorting'] },
        { name:'Score High',link:'https://www.codechef.com/problems/HIGHSCORE',level:672,website:'Codechef',topic:['greedy algorithm'] },
        { name:'BOMB THE BASE',link:'https://www.codechef.com/problems/BOMBTHEBASE',level:982,website:'Codechef',topic:['greedy algorithm'] },
        { name:'Janmash At Fruit Market',link:'https://www.codechef.com/problems/JMARKET',level:947,website:'Codechef',topic:['greedy algorithm'] },
        { name:'Sums in a triangle',link:'https://www.codechef.com/problems/SUMTRIAN',level:869,website:'Codechef',topic:['dynamic programming'] },
        { name:'Ezio and Guards',link:'https://www.codechef.com/problems/MANIPULATE',level:427,website:'Codechef',topic:['basic programming'] },
        { name:'Discuss Throw',link:'https://www.codechef.com/problems/DISCUS',level:662,website:'Codechef',topic:['basic programming'] },
        { name:'Pass or Fail',link:'https://www.codechef.com/problems/PASSORFAIL',level:730,website:'Codechef',topic:['basic programming'] },
        { name:'RCB and Playoffs',link:'https://www.codechef.com/problems/RCBPLAY',level:788,website:'Codechef',topic:['basic programming'] },
        { name:'The Preparations',link:'https://www.codechef.com/problems/SUPCHEF',level:823,website:'Codechef',topic:['basic programming'] },
        { name:'Problem Category',link:'https://www.codechef.com/problems/PROBCAT',level:860,website:'Codechef',topic:['basic programming'] },
        { name:'Chef and Spells',link:'https://www.codechef.com/problems/CHFSPL',level:965,website:'Codechef',topic:['basic programming'] },
        { name:'Dominant Element',link:'https://www.codechef.com/problems/DOMINANT2',level:1171,website:'Codechef',topic:['array'] },
        { name:'Prime Reversal',link:'https://www.codechef.com/problems/PRIMEREVERSE',level:1053,website:'Codechef',topic:['string'] },
        { name:'Studying Alphabet',link:'https://www.codechef.com/problems/ALPHABET',level:1123,website:'Codechef',topic:['string'] },
        { name:'Jewels And Stones',link:'https://www.codechef.com/problems/STONES',level:1248,website:'Codechef',topic:['string'] },
        { name:'Your name is mine',link:'https://www.codechef.com/problems/NAME2',level:1285,website:'Codechef',topic:['string','dynamic programming'] },
        { name:'Lapindromes',link:'https://www.codechef.com/problems/LAPIN',level:1159,website:'Codechef',topic:['array'] },
        { name:'Coronavirus Spread',link:'https://www.codechef.com/problems/COVID19',level:1219,website:'Codechef',topic:['array','basic programming'] },
        { name:'Carvans',link:'https://www.codechef.com/problems/CARVANS',level:1264,website:'Codechef',topic:['array'] },
        { name:'Racing Horses',link:'https://www.codechef.com/problems/HORSES',level:1231,website:'Codechef',topic:['sorting'] },
        { name:'Lazy Salesman',link:'https://www.codechef.com/problems/HOLIDAYS',level:1161,website:'Codechef',topic:['sorting'] },
        { name:'Pet Store',link:'https://www.codechef.com/problems/PETSTORE',level:1126,website:'Codechef',topic:['sorting'] },
        { name:'Uncle Johny',link:'https://www.codechef.com/problems/JOHNY',level:1093,website:'Codechef',topic:['sorting'] },
        { name:'Vaccine Distribution',link:'https://www.codechef.com/problems/VACCINE2',level:1219,website:'Codechef',topic:['math','basic programming'] },
        { name:'The Two Dishes',link:'https://www.codechef.com/problems/MAX_DIFF',level:1254,website:'Codechef',topic:['math','basic programming'] },
        { name:'Travel Pass',link:'https://www.codechef.com/problems/TRAVELPS',level:1118,website:'Codechef',topic:['math'] },
        { name:'Airline Restrictions',link:'https://www.codechef.com/problems/AIRLINE',level:1043,website:'Codechef',topic:['basic programming'] },
        { name:'Chef And Groups',link:'https://www.codechef.com/problems/GROUPS',level:1176,website:'Codechef',topic:['basic programming'] },
        { name:'Chef And Wildcard Matching',link:'https://www.codechef.com/problems/TWOSTR',level:1254,website:'Codechef',topic:['basic programming'] },
        { name:'Cops and Thief Devu',link:'https://www.codechef.com/problems/COPS',level:1242,website:'Codechef',topic:['binary search'] },
        { name:'Covid and Theatre Tickets',link:'https://www.codechef.com/problems/COVID_19',level:1077,website:'Codechef',topic:['greedy algorithm'] },
        { name:'Maximum Length Even Subarray',link:'https://www.codechef.com/problems/MXEVNSUB',level:1221,website:'Codechef',topic:['greedy algorithm'] },
        
        { name:'Count SubStrings',link:'https://www.codechef.com/problems/CSUB',level:1330,website:'Codechef',topic:['array','string','math'] },
        { name:'Chef And Rainbow Array',link:'https://www.codechef.com/problems/RAINBOWA',level:1467,website:'Codechef',topic:['array'] },
        { name:'Smallest KMP',link:'https://www.codechef.com/problems/SKMP',level:1538,website:'Codechef',topic:['array'] },
        { name:'Stupid Machine',link:'https://www.codechef.com/problems/STUPMACH',level:1591,website:'Codechef',topic:['array'] },
        { name:'Magical Doors',link:'https://www.codechef.com/problems/MAGDOORS',level:1355,website:'Codechef',topic:['string'] },
        { name:'Passwords',link:'https://www.codechef.com/problems/PASSWD',level:1470,website:'Codechef',topic:['string'] },
        { name:'Chef And Meetings',link:'https://www.codechef.com/problems/MEET',level:1546,website:'Codechef',topic:['string','basic programming'] },
        { name:'Shuffling Parities',link:'https://www.codechef.com/problems/SHUFFLIN',level:1347,website:'Codechef',topic:['math'] },
        { name:'Permutation XOR',link:'https://www.codechef.com/problems/PERMXORITY',level:1437,website:'Codechef',topic:['math'] },
        { name:'Possible or Not',link:'https://www.codechef.com/problems/CS2023_PON',level:1578,website:'Codechef',topic:['math'] },
        { name:'Problem Difficulties',link:'https://www.codechef.com/problems/PROBDIFF',level:1321,website:'Codechef',topic:['sorting'] },
        { name:'Mix the colors',link:'https://www.codechef.com/problems/MIXCOLOR',level:1419,website:'Codechef',topic:['sorting','data structures'] },
        { name:'List of Lists',link:'https://www.codechef.com/problems/LISTLIST',level:1567,website:'Codechef',topic:['sorting'] },
        { name:'The Wave',link:'https://www.codechef.com/problems/WAV2',level:1518,website:'Codechef',topic:['binary search'] },
        { name:'Sheokand and number',link:'https://www.codechef.com/problems/SHKNUM',level:1534,website:'Codechef',topic:['binary search'] },
        { name:'Minimum distance between 1s',link:'https://www.codechef.com/problems/MINDIST1',level:1335,website:'Codechef',topic:['data structures'] },
        { name:'Average Flex',link:'https://www.codechef.com/problems/AVGFLEX',level:1442,website:'Codechef',topic:['data structures'] },
        { name:'Minimum number of pizzas',link:'https://www.codechef.com/problems/SUBSTRING',level:1442,website:'Codechef',topic:['greedy algorithm'] },
        { name:'Count Subarrays',link:'https://www.codechef.com/problems/SUBINC',level:1478,website:'Codechef',topic:['dynamic programming'] },
        { name:'Ada King',link:'https://www.codechef.com/problems/ADAKNG',level:1581,website:'Codechef',topic:['graphs'] },
        
        { name:'Charges',link:'https://www.codechef.com/problems/CHARGES',level:1645,website:'Codechef',topic:['array','data structure'] },
        { name:'Team Name',link:'https://www.codechef.com/problems/TEAMNAME',level:1748,website:'Codechef',topic:['array','data structure'] },
        { name:'Chef and digits jump',link:'https://www.codechef.com/problems/DIGJUMP',level:1886,website:'Codechef',topic:['array','segment trees'] },
        { name:'Array Rotation',link:'https://www.codechef.com/problems/ARRROT',level:1615,website:'Codechef',topic:['string','math','data structure'] },
        { name:'XOR Equal',link:'https://www.codechef.com/problems/PALINT',level:1731,website:'Codechef',topic:['string','math','data structure'] },
        { name:'Chef And Easy Problem',link:'https://www.codechef.com/problems/XXOR',level:1830,website:'Codechef',topic:['string','data structure'] },
        { name:'XOR Engine',link:'https://www.codechef.com/problems/ENGXOR',level:1632,website:'Codechef',topic:['math'] },
        { name:'College life 4',link:'https://www.codechef.com/problems/COLGLF4',level:1856,website:'Codechef',topic:['math'] },
        { name:'Distinct pairs',link:'https://www.codechef.com/problems/DPAIRS',level:1699,website:'Codechef',topic:['sorting'] },
        { name:'Magnet Sort',link:'https://www.codechef.com/problems/MAGNETSORT',level:1804,website:'Codechef',topic:['sorting'] },
        { name:'Minimize the maximum',link:'https://www.codechef.com/problems/MINMAXARR',level:1689,website:'Codechef',topic:['binary search'] },
        { name:'Stacks',link:'https://www.codechef.com/problems/STACKS',level:1799,website:'Codechef',topic:['binary search'] },
        { name:'Not all flavours',link:'https://www.codechef.com/problems/NOTALLFL',level:1856,website:'Codechef',topic:['data structure'] },
        { name:'Positive Array',link:'https://www.codechef.com/problems/CIREQ',level:1620,website:'Codechef',topic:['greedy algorithm'] },
        { name:'Partition the numbers',link:'https://www.codechef.com/problems/PRTITION',level:1884,website:'Codechef',topic:['greedy algorithm'] },
        { name:'Chef and frogs',link:'https://www.codechef.com/problems/FROGV',level:1668,website:'Codechef',topic:['dynamic programming'] },
        { name:'XOR with Subset',link:'https://www.codechef.com/problems/XORSUB',level:1879,website:'Codechef',topic:['dynamic programming'] },
        { name:'Just a graph',link:'https://www.codechef.com/problems/JAG',level:1659,website:'Codechef',topic:['graph'] },
        { name:'Way out',link:'https://www.codechef.com/problems/WOUT',level:1869,website:'Codechef',topic:['graph'] },
        { name:'Rectangular Queries',link:'https://www.codechef.com/problems/RECTQUER',level:1799,website:'Codechef',topic:['segment trees'] },
        { name:'Checkmate',link:'https://www.codechef.com/problems/CHECKMATE',level:1853,website:'Codechef',topic:['basic programming'] },

        { name:'Maximize Islands',link:'https://www.codechef.com/problems/MINIL',level:1932,website:'Codechef',topic:['array','string','data structure'] },
        { name:'Binary String MEX',link:'https://www.codechef.com/problems/MEXSTR',level:2048,website:'Codechef',topic:['array',] },
        { name:'Chef and functions',link:'https://www.codechef.com/problems/FUNC',level:2141,website:'Codechef',topic:['array','binary search'] },
        { name:'String merging',link:'https://www.codechef.com/problems/STRMRG',level:1965,website:'Codechef',topic:['string'] },
        { name:'Count Substrings',link:'https://www.codechef.com/problems/STRSUB',level:2105,website:'Codechef',topic:['string','math','data structure','dynamic programming', 'segment trees','basic programming'] },
        { name:'Chef and strings',link:'https://www.codechef.com/problems/TASHIFT',level:2167,website:'Codechef',topic:['string','data structure'] },
        { name:'Add and Divide',link:'https://www.codechef.com/problems/ADDNDIV',level:1935,website:'Codechef',topic:['math'] },
        { name:'Online Shopping',link:'https://www.codechef.com/problems/COUPON',level:2117,website:'Codechef',topic:['math','data structure'] },
        { name:'Delivery Man',link:'https://www.codechef.com/problems/TADELIVE',level:1980,website:'Codechef',topic:['sorting'] },
        { name:'Can you reach the end',link:'https://www.codechef.com/problems/RECHEND',level:2095,website:'Codechef',topic:['sorting'] },
        { name:'Appy and Balloons',link:'https://www.codechef.com/problems/HMAPPY',level:1947,website:'Codechef',topic:['binary search'] },
        { name:'Love squares hate cubes',link:'https://www.codechef.com/problems/SQRTCBRT',level:2150,website:'Codechef',topic:['binary search'] },
        { name:'Optimal Sorting',link:'https://www.codechef.com/problems/OPTSORT',level:2045,website:'Codechef',topic:['data structure'] },
        { name:'Chef And Line',link:'https://www.codechef.com/problems/CARRAY',level:2005,website:'Codechef',topic:['greedy algorithm','dynamic programming', 'segment trees'] },
        { name:'Maximize size',link:'https://www.codechef.com/problems/RISK',level:2113,website:'Codechef',topic:['greedy algorithm'] },
        { name:'Masterchef',link:'https://www.codechef.com/problems/MCHEF',level:2016,website:'Codechef',topic:['dynamic programming'] },
        { name:'Chef Designed a network',link:'https://www.codechef.com/problems/CHEFK1',level:1945,website:'Codechef',topic:['graph'] },
        { name:'Tree house',link:'https://www.codechef.com/problems/WOUT',level:2023,website:'Codechef',topic:['graph'] },
        { name:'Cutting plants',link:'https://www.codechef.com/problems/CUTPLANT',level:2172,website:'Codechef',topic:['segment trees'] },
        { name:'Cracking the code',link:'https://www.codechef.com/problems/CODECRCK',level:2038,website:'Codechef',topic:['basic programming'] },

        { name:'Binary Concatenation',link:'https://www.codechef.com/problems/BINFUN',level:2240,website:'Codechef',topic:['array'] },
        { name:'Freinds group in a line',link:'https://www.codechef.com/problems/FRIENDGR',level:2382,website:'Codechef',topic:['array'] },
        { name:'Increasing string',link:'https://www.codechef.com/problems/INCREAST',level:2479,website:'Codechef',topic:['array'] },
        { name:'ABC-Strings',link:'https://www.codechef.com/problems/ABCSTR',level:2268,website:'Codechef',topic:['string'] },
        { name:'K-Subarrays',link:'https://www.codechef.com/problems/CHESUB',level:2306,website:'Codechef',topic:['string','greedy algorithm','math','data structure','dynamic programming', 'segment trees','basic programming'] },
        { name:'Divisible Subset',link:'https://www.codechef.com/problems/DIVSUBS',level:2392,website:'Codechef',topic:['string','data structure'] },
        { name:'Partition It',link:'https://www.codechef.com/problems/PARPERM',level:2202,website:'Codechef',topic:['math'] },
        { name:'Root of the problem',link:'https://www.codechef.com/problems/TREEROOT',level:2247,website:'Codechef',topic:['math','data structure'] },
        { name:'Lowest Sum',link:'https://www.codechef.com/problems/LOWSUM',level:2306,website:'Codechef',topic:['sorting'] },
        { name:'Mean equal median',link:'https://www.codechef.com/problems/MEANIDIAN',level:2487,website:'Codechef',topic:['sorting'] },
        { name:'Subsequence frequency counting',link:'https://www.codechef.com/problems/SUBSFREQ',level:2357,website:'Codechef',topic:['sorting'] },
        { name:'Saving a gift of love',link:'https://www.codechef.com/problems/ASHIGIFT',level:2265,website:'Codechef',topic:['binary search','greedy algorithm','dynamic programming'] },
        { name:'Integer concatenation',link:'https://www.codechef.com/problems/INTCONCA',level:2436,website:'Codechef',topic:['binary search'] },
        { name:'Chef and string',link:'https://www.codechef.com/problems/CHSTR',level:2239,website:'Codechef',topic:['data structure'] },
        { name:'Maximum Topological Sort',link:'https://www.codechef.com/problems/MAXTOPO',level:2304,website:'Codechef',topic:['greedy algorithm','dynamic programming', 'segment trees'] },
        { name:'Chef and Fibonacci array',link:'https://www.codechef.com/problems/CHEFFA',level:2273,website:'Codechef',topic:['dynamic programming'] },
        { name:'Thank you,next',link:'https://www.codechef.com/problems/MAIL_DELIVER',level:2268,website:'Codechef',topic:['graph'] },
        { name:'Friends',link:'https://www.codechef.com/problems/RRFRNDS',level:2331,website:'Codechef',topic:['graph'] },
        { name:'Pizza delivery',link:'https://www.codechef.com/problems/PDELIV',level:2438,website:'Codechef',topic:['segment trees'] },
        { name:'College admissions',link:'https://www.codechef.com/problems/ADMIT',level:2496,website:'Codechef',topic:['basic programming'] },
        
        { name:'Banana string',link:'https://www.codechef.com/problems/BANSTR',level:2558,website:'Codechef',topic:['array','string','data structure'] },
        { name:'Matrix Permutations',link:'https://www.codechef.com/problems/MATPERM',level:3933,website:'Codechef',topic:['array'] },
        { name:'Broken Dreams',link:'https://www.codechef.com/problems/BRKDRMS',level:3084,website:'Codechef',topic:['array','string','greedy algorithm'] },
        { name:'Flip or compress',link:'https://www.codechef.com/problems/FLIPCOMP',level:2639,website:'Codechef',topic:['string'] },
        { name:'Special string',link:'https://www.codechef.com/problems/SPECIALSTR',level:2886,website:'Codechef',topic:['string'] },
        { name:'Palindrome Love',link:'https://www.codechef.com/problems/PALINLOVE',level:3077,website:'Codechef',topic:['string'] },
        { name:'Maximum OR Path',link:'https://www.codechef.com/problems/ADDNDIV',level:2502,website:'Codechef',topic:['math'] },
        { name:'Expected Product',link:'https://www.codechef.com/problems/EXPTPROD',level:2665,website:'Codechef',topic:['math','data structure'] },
        { name:'Tsetso subarray',link:'https://www.codechef.com/problems/A1016054',level:3272,website:'Codechef',topic:['sorting'] },
        { name:'Sleep technique',link:'https://www.codechef.com/problems/SLEEPTECH',level:2673,website:'Codechef',topic:['binary search'] },
        { name:'Beautiful Branch',link:'https://www.codechef.com/problems/B_BRANCH',level:3546,website:'Codechef',topic:['binary search'] },
        { name:'Vacation',link:'https://www.codechef.com/problems/TESTERS',level:2730,website:'Codechef',topic:['data structure'] },
        { name:'Good Indices',link:'https://www.codechef.com/problems/GOODINDICES',level:2934,website:'Codechef',topic:['greedy algorithm'] },
        { name:'Elevator',link:'https://www.codechef.com/problems/ELEVATR',level:3248,website:'Codechef',topic:['greedy algorithm'] },
        { name:'Level of difference',link:'https://www.codechef.com/problems/TASTR',level:2522,website:'Codechef',topic:['dynamic programming'] },
        { name:'Game of numbers',link:'https://www.codechef.com/problems/GNUM',level:2521,website:'Codechef',topic:['graph'] },
        { name:'Children trips',link:'https://www.codechef.com/problems/TRIPS',level:2899,website:'Codechef',topic:['graph'] },
        { name:'Tree',link:'https://www.codechef.com/problems/RRTREE',level:2936,website:'Codechef',topic:['segment trees'] },
        { name:'Chef and divisors',link:'https://www.codechef.com/problems/DIVISOR',level:2932,website:'Codechef',topic:['basic programming'] },
        {
    
            name: 'A and B and Compilation Errors',
            link: 'https://codeforces.com/problemset/problem/519/B',
            level: 1100,
            website: 'Codeforces',
            topic: [ 'data_structures', 'implementation', 'sortings' ],
            
          },
          {
           
            name: 'Laptops',
            link: 'https://codeforces.com/problemset/problem/456/A',
            level: 1100,
            website: 'Codeforces',
            topic: [ 'sortings' ],
            
          },
          {
           
            name: 'Sum of Odd Integers',
            link: 'https://codeforces.com/problemset/problem/1327/A',
            level: 1100,
            website: 'Codeforces',
            topic: [ 'math' ],
           
          },
          {
            
            name: 'Long Jumps',
            link: 'https://codeforces.com/problemset/problem/1472/C',
            level: 1100,
            website: 'Codeforces',
            topic: [ 'dp', 'graphs' ],
           
          },
          {
            
            name: 'Minor Reductions',
            link: 'https://codeforces.com/problemset/problem/1626/B',
            level: 1100,
            website: 'Codeforces',
            topic: [ 'greedy', 'strings' ],
            
          },
          {
            
            name: 'Max and Mex',
            link: 'https://codeforces.com/problemset/problem/1496/B',
            level: 1100,
            website: 'Codeforces',
            topic: [ 'math' ],
            
          },
          {
          
            name: 'Reachable Numbers',
            link: 'https://codeforces.com/problemset/problem/1157/A',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'implementation' ],
           
          },
          {
            
            name: 'Infinite Sequence',
            link: 'https://codeforces.com/problemset/problem/675/A',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'math' ],
            
          },
        
        
          {
           
            name: 'Equidistant String',
            link: 'https://codeforces.com/problemset/problem/545/B',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'greedy' ],
           
          },
          {
           
            name: 'The Great Julya Calendar',
            link: 'https://codeforces.com/problemset/problem/331/C1',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'dp' ],
           
          },
          {
           
            name: 'Substrings Sort',
            link: 'https://codeforces.com/problemset/problem/988/B',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'sortings', 'strings' ],
            
          },
          {
           
            name: 'Letter',
            link: 'https://codeforces.com/problemset/problem/43/B',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'implementation', 'strings' ],
           
          },
          {
           
            name: 'Number Circle',
            link: 'https://codeforces.com/problemset/problem/1189/B',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'greedy', 'math', 'sortings' ],
            
          },
          {
           
            name: 'Less or Equal',
            link: 'https://codeforces.com/problemset/problem/977/C',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'sortings' ],
           
          },
          {
           
            name: 'Make it good',
            link: 'https://codeforces.com/problemset/problem/1385/C',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'greedy' ],
           
          },
          {
            
            name: 'Poisoned Dagger',
            link: 'https://codeforces.com/problemset/problem/1613/C',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'binary_search' ],
            
          },
          {
            
            name: 'Magical Calendar',
            link: 'https://codeforces.com/problemset/problem/1371/B',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'math' ],
            
          },
          {
            
            name: 'Creating the Contest',
            link: 'https://codeforces.com/problemset/problem/1029/B',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'dp', 'greedy', 'math' ],
            
          },
          {
           
            name: 'Simple Molecules',
            link: 'https://codeforces.com/problemset/problem/344/B',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'graphs', 'math' ],
           
          },
          {
           
            name: 'Phone Numbers',
            link: 'https://codeforces.com/problemset/problem/151/B',
            level: 1200,
            website: 'Codeforces',
            topic: [ 'strings' ],
            
          },
          {
            
            name: 'Alice,Bob and Candies',
            link: 'https://codeforces.com/problemset/problem/1352/D',
            level: 1300,
            website: 'Codeforces',
            topic: [ 'implementation' ],
           
          }

        
        
       
])

]

// Product.insertMany(seedProducts)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })
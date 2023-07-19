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
        name: 'Two Sum',
        link: 'https://leetcode.com/problems/two-sum/',
        level: 'easy',
        website: 'Leetcode',
        topics: ['array']
    },
    {
        name:'Median of two sorted arrays',
        link:'https://leetcode.com/problems/median-of-two-sorted-arrays/',
        level: 'hard',
        website: 'Leetcode',
        topics:['array','binary search']
    },
    {
        name:'Container with most water',
        link:'https://leetcode.com/problems/container-with-most-water/',
        level: 'medium',
        website:'Leetcode',
        topics:['array','greedy','two pointers']
    },
    {
        name: 'Remove duplicates from sorted array',
        link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
        level:'easy',
        website: 'Leetcode',
        topics: ['array']
    },
    {
        name: 'Next permutation',
        link: 'https://leetcode.com/problems/next-permutation/',
        level: 'medium',
        website: 'Leetcode',
        topics:['array','two pointers']
    },
    {
        name: 'Sudoku solver',
        link:'https://leetcode.com/problems/sudoku-solver/',
        level: 'hard',
        website: 'Leetcode',
        topics: ['array']
    },
    {
        name: 'Plus one',
        link: 'https://leetcode.com/problems/plus-one/',
        level:'easy',
        website: 'Leetcode',
        topics: ['array','math']
    },
    {
        name:'Text justification',
        link: 'https://leetcode.com/problems/text-justification/',
        level: 'hard',
        website: 'Leetcode',
        topics:['array','string']

    },
    {
        name: 'Set matrix zeroes',
        link: 'https://leetcode.com/problems/set-matrix-zeroes/',
        level:'medium',
        website: 'Leetcode',
        topics:['array']
    },
    {
        name: 'Merge sorted array',
        link: 'https://leetcode.com/problems/merge-sorted-array/',
        level: 'easy',
        website: 'Leetcode',
        topics:['array','sorting','two pointers']
    },
    {
        name: 'Word search',
        link: 'https://leetcode.com/problems/word-search/',
        level: 'medium',
        website:'Leetcode',
        topics: ['array']
    },
    {
        name: 'Maximal rectangle',
        link: 'https://leetcode.com/problems/maximal-rectangle/',
        level: 'hard',
        website:'Leetcode',
        topics: ['array','dynamic programming']
    },
    {
        name:'Roman to Integer',
        link: 'https://leetcode.com/problems/roman-to-integer/',
        level: 'easy',
        website:'Leetcode',
        topics: ['string',]
    },
    {
        name: 'Longest Palindromic String',
        link: 'https://leetcode.com/problems/longest-palindromic-substring/',
        level: 'medium',
        website:'Leetcode',
        topics: ['string']
    },
    {
        name: 'Regular expression matching',
        link: 'https://leetcode.com/problems/regular-expression-matching/',
        level: 'hard',
        website: 'Leetcode',
        topics: ['string']
    },
    {
        name: 'Longest common prefix',
        link: 'https://leetcode.com/problems/longest-common-prefix/',
        level: 'easy',
        website: 'Leetcode',
        topics: ['string']
    },
    {
        name: 'Letter combinations of a phone number',
        link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
        level: 'medium',
        website: 'Leetcode',
        topics: ['string']
    },
    {
        name: 'Substring with concatenation of all words',
        link: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/',
        level: 'hard',
        website: 'Leetcode',
        topics:['string']
    },
    {
        name: 'Length of last word',
        link: 'https://leetcode.com/problems/length-of-last-word/',
        level: 'easy',
        website: 'Leetcode',
        topics: ['string']
    },
    {
        name: 'Group anagrams',
        link: 'https://leetcode.com/problems/group-anagrams/',
        level: 'medium',
        website: 'Leetcode',
        topics: ['string','sorting']
    },
    {
        name: 'Wildcard matching',
        link: 'https://leetcode.com/problems/wildcard-matching/',
        level:'hard',
        website:'Leetcode',
        topics:['string','greedy','dynamic programming']
    },
    {
        name:'Add binary',
        link: 'https://leetcode.com/problems/add-binary/',
        level: 'easy',
        website: 'Leetcode',
        topics: ['string','math']
    },
    {
        name:'Simplify path',
        link: 'https://leetcode.com/problems/simplify-path/',
        level: 'medium',
        website: 'Leetcode',
        topics:['string']
    },
    {
        name:'Palindrome number',
        link: 'https://leetcode.com/problems/palindrome-number/',
        level: 'easy',
        website: 'Leetcode',
        topics: ['math']
    },
    {
        name: 'Integer to Roman',
        link:'https://leetcode.com/problems/integer-to-roman/',
        level:'medium',
        website:'Leetcode',
        topics:['math']
    },
    {
        name: 'Permutation sequence',
        link:'https://leetcode.com/problems/permutation-sequence/',
        level:'hard',
        website:'Leetcode',
        topics:['math']
    },
    {
        name:'Climbing Stairs',
        link:'https://leetcode.com/problems/climbing-stairs/',
        level:'easy',
        website:'Leetcode',
        topics:['math','dynamic programming']
    },
    {
        name: 'Gray code',
        link:'https://leetcode.com/problems/gray-code/',
        level:'medium',
        website:'Leetcode',
        topics:['math']
    },
    {
        name:'Max points on a line',
        link:'https://leetcode.com/problems/max-points-on-a-line/',
        levell:'hard',
        website:'Leetcode',
        topics:['math']
    },
    {
        name:'Happy number',
        link:'https://leetcode.com/problems/happy-number/',
        level:'easy',
        website:'Leetcode',
        topics:['math','two pointers']
    },
    {
        name:'Count Primes',
        link:'https://leetcode.com/problems/count-primes/',
        level:'medium',
        website:'Leetcode',
        topics:['math']
    },
    {
        name:'Basic calculator',
        link:'https://leetcode.com/problems/basic-calculator/',
        level:'hard',
        website:'Leetcode',
        topics:['math']
    },
    {
        name:'Power of two',
        link:'https://leetcode.com/problems/power-of-two/',
        level:'easy',
        website:'Leetcode',
        topics:['math']
    },
    {
        name:'Perfect squares',
        link:'https://leetcode.com/problems/perfect-squares/',
        level:'medium',
        website:'Leetcode',
        topics:['math']
    },
    {
        name:'Number of digit one',
        link:'https://leetcode.com/problems/number-of-digit-one/',
        level:'hard',
        website:'Leetcode',
        topics:['math']
    },
    {
        name:'Search insert position',
        link:'https://leetcode.com/problems/search-insert-position/',
        level:'easy',
        website:'Leetcode',
        topics:['binary search']
    },
    {
        name:'Search a 2D matrix',
        link:'https://leetcode.com/problems/search-a-2d-matrix/',
        level:'medium',
        website:'Leetcode',
        topics:['binary search']
    },
    {
        name:'Missing number',
        link:'https://leetcode.com/problems/missing-number/',
        level:'easy',
        website:'Leetcode',
        topics:['binary search','sorting']
    },
    {
        name:'Find the duplicate number',
        link:'https://leetcode.com/problems/find-the-duplicate-number/',
        level:'medium',
        website:'Leetcode',
        topics:['binary search']
    },
    {
        name:'Count of range sum',
        link:'https://leetcode.com/problems/count-of-range-sum/',
        level:'hard',
        website:'Leetcode',
        topics:['binary search']
    },
    {
        name:'Valid perfect square',
        link:'https://leetcode.com/problems/valid-perfect-square/',
        level:'easy',
        website:'Leetcode',
        topics:['binary search']
    },
    {
        name:'Find right interval',
        link:'https://leetcode.com/problems/find-right-interval/',
        level:'medium',
        website:'Leetcode',
        topics:['binary search']
    },
    {
        name:'Reverse pairs',
        link:'https://leetcode.com/problems/reverse-pairs/',
        level:'hard',
        website:'Leetcode',
        topics:['binary search']
    },
    {
        name:'Longest palindrome',
        link:'https://leetcode.com/problems/longest-palindrome/',
        level:'easy',
        website:'Leetcode',
        topics:['greedy']
    },
    {
        name:'Gas station',
        link:'https://leetcode.com/problems/gas-station/',
        level:'medium',
        website:'Leetcode',
        topics:['greedy']
    },
    {
        name:'Candy',
        link:'https://leetcode.com/problems/candy/',
        level:'hard',
        website:'Leetcode',
        topics:['greedy']
    },
    {
        name:'Assign cookies',
        link:'https://leetcode.com/problems/assign-cookies/',
        level:'easy',
        website:'Leetcode',
        topics:['greedy','sorting','two pointers']
    },
    {
        name:'Largest number',
        link:'https://leetcode.com/problems/largest-number/',
        level:'medium',
        website:'Leetcode',
        topics:['greedy','sorting']
    },
    {
        name:'Patching Array',
        link:'https://leetcode.com/problems/patching-array/',
        level:'hard',
        website:'Leetcode',
        topics:['greedy']
    },
    {
        name:'Array partition',
        link:'https://leetcode.com/problems/array-partition/',
        level:'easy',
        website:'Leetcode',
        topics:['greedy','sorting']
    },
    {
        name:'Boats to save people',
        link:'https://leetcode.com/problems/boats-to-save-people/',
        level:'medium',
        website:'Leetcode',
        topics:['greedy']
    },
    {
        name:'Stamping the sequence',
        link:'https://leetcode.com/problems/stamping-the-sequence/',
        level:'hard',
        website:'Leetcode',
        topics:['greedy']
    },
    {
        name:'Counting bits',
        link:'https://leetcode.com/problems/counting-bits/',
        level:'easy',
        website:'Leetcode',
        topics:['dynamic programming']
    },
    {
        name:'Integer break',
        link:'https://leetcode.com/problems/integer-break/',
        level:'medium',
        website:'Leetcode',
        topics:['dynamic programming']
    },
    {
        name:'Scramble string',
        link:'https://leetcode.com/problems/scramble-string/',
        level:'hard',
        website:'Leetcode',
        topics:['dynamic programming']
    },
    {
        name:'Is subsequence',
        link:'https://leetcode.com/problems/is-subsequence/',
        level:'easy',
        website:'Leetcode',
        topics:['dynamic programming']
    },
    {
        name:'Rotate function',
        link:'https://leetcode.com/problems/rotate-function/',
        level:'medium',
        website:'Leetcode',
        topics:['dynamic programming']
    },
    {
        name:'Frog jump',
        link:'https://leetcode.com/problems/frog-jump/',
        level:'hard',
        website:'Leetcode',
        topics:['dynamic programming']
    },
    {
        name:'Min cost climbing stairs',
        link:'https://leetcode.com/problems/min-cost-climbing-stairs/',
        level:'easy',
        website:'Leetcode',
        topics:['dynamic programming']
    },
    {
        name:'Largest plus sign',
        link:'https://leetcode.com/problems/largest-plus-sign/',
        level:'medium',
        website:'Leetcode',
        topics:['dynamic programming']
    },
    {
        name:'Cherry pickup',
        link:'https://leetcode.com/problems/cherry-pickup/',
        level:'hard',
        website:'Leetcode',
        topics:['dynamic programming']
    },
    {
        name:'Clone graph',
        link:'https://leetcode.com/problems/clone-graph/',
        level:'medium',
        website:'Leetcode',
        topics:['graph']
    },
    {
        name:'Longest increasing path in a matrix',
        link:'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/',
        level:'hard',
        website:'Leetcode',
        topics:['graph']
    },
    {
        name:'Evaluate division',
        link:'https://leetcode.com/problems/evaluate-division/',
        level:'medium',
        website:'Leetcode',
        topics:['graph']
    },
    {
        name:'Cracking the safe',
        link:'https://leetcode.com/problems/cracking-the-safe/',
        level:'hard',
        website:'Leetcode',
        topics:['graph']
    },
    {
        name:'Possible bipartition',
        link:'https://leetcode.com/problems/possible-bipartition/',
        level:'medium',
        website:'Leetcode',
        topics:['graph']
    },
    {
        name:'Cat and mouse',
        link:'https://leetcode.com/problems/cat-and-mouse/',
        level:'hard',
        website:'Leetcode',
        topics:['graph']
    },
    {
        name:'Find the town judge',
        link:'https://leetcode.com/problems/find-the-town-judge/',
        level:'easy',
        website:'Leetcode',
        topics:['graph']
    },
    {
        name:'Find center of star graph',
        link:'https://leetcode.com/problems/find-center-of-star-graph/',
        level:'easy',
        website:'Leetcode',
        topics:['graph']
    },
    {
        name:'Find if path exists in graph',
        link:'https://leetcode.com/problems/find-if-path-exists-in-graph/',
        level:'easy',
        website:'Leetcode',
        topics:['graph']
    },
    {
        name:'Majority element',
        link:'https://leetcode.com/problems/majority-element/',
        level:'easy',
        website:'Leetcode',
        topics:['sorting']
    },
    {
        name:'Sort list',
        link:'https://leetcode.com/problems/sort-list/',
        level:'medium',
        website:'Leetcode',
        topics:['sorting','two pointers']
    },
    {
        name:'Maximum gap',
        link:'https://leetcode.com/problems/maximum-gap/',
        level:'hard',
        website:'Leetcode',
        topics:['sorting']
    },
    {
        name:'Valid anagram',
        link:'https://leetcode.com/problems/valid-anagram/',
        level:'easy',
        website:'Leetcode',
        topics:['sorting']
    },
    {
        name:'H-index',
        link:'https://leetcode.com/problems/h-index/',
        level:'medium',
        website:'Leetcode',
        topics:['sorting']
    },
    {
        name:'Find median from data stream',
        link:'https://leetcode.com/problems/find-median-from-data-stream/',
        level:'hard',
        website:'Leetcode',
        topics:['sorting']
    },
    {
        name:'Find the difference',
        link:'https://leetcode.com/problems/find-the-difference/',
        level:'easy',
        website:'Leetcode',
        topics:['sorting']
    },
    {
        name:'Maximum ice cream bars',
        link:'https://leetcode.com/problems/maximum-ice-cream-bars/',
        level:'medium',
        website:'Leetcode',
        topics:['sorting']
    },
    {
        name:'Closest room',
        link:'https://leetcode.com/problems/closest-room/',
        level:'hard',
        website:'Leetcode',
        topics:['sorting']
    },
    {
        name:'Lexicographically smallest pallindrome',
        link:'https://leetcode.com/problems/lexicographically-smallest-palindrome/',
        level:'easy',
        website:'Leetcode',
        topics:['two pointers']
    },
    {
        name:'Find the maximum number of marked indices',
        link:'https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/',
        level:'medium',
        website:'Leetcode',
        topics:['two pointers']
    },
    {
        name:'Subsequence with the minimum score',
        link:'https://leetcode.com/problems/subsequence-with-the-minimum-score/',
        level:'hard',
        website:'Leetcode',
        topics:['two pointers']
    },
    {
        name:'Minimum common value',
        link:'https://leetcode.com/problems/minimum-common-value/',
        level:'easy',
        website:'Leetcode',
        topics:['two pointers']
    },
    {
        name:'Maximum total beauty of the gardens',
        link:'https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/',
        level:'hard',
        website:'Leetcode',
        topics:['two pointers']
    },
    {
        name:'Number of distinct averages',
        link:'https://leetcode.com/problems/number-of-distinct-averages/',
        level:'easy',
        website:'Leetcode',
        topics:['two pointers']
    },
    {
        name:'Rotating the box',
        link:'https://leetcode.com/problems/rotating-the-box/',
        level:'medium',
        website:'Leetcode',
        topics:['two pointers']
    },
    {
        name:'Largest merge of two strings',
        link:'https://leetcode.com/problems/largest-merge-of-two-strings/',
        level:'medium',
        website:'Leetcode',
        topics:['two pointers']
    },
    {
        name:'Trapping rain water',
        link:'https://leetcode.com/problems/trapping-rain-water/',
        level:'hard',
        website:'Leetcode',
        topics:['two pointers']
    },
    {
        name:'Find pivot index',
        link:'https://leetcode.com/problems/find-pivot-index/',
        level:'easy',
        website:'Leetcode',
        topics:['prefix sum']
    },
    {
        name:'Contiguous Array',
        link:'https://leetcode.com/problems/contiguous-array/',
        level:'medium',
        website:'Leetcode',
        topics:['prefix sum']
    },
    {
        name:'Split array largest sum',
        link:'https://leetcode.com/problems/split-array-largest-sum/',
        level:'hard',
        website:'Leetcode',
        topics:['prefix sum']
    },
    {
        name:'Minimum value to get positive step by step sum',
        link:'https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/',
        level:'easy',
        website:'Leetcode',
        topics:['prefix sum']
    },
    {
        name:'XOR queries of a subarray',
        link:'https://leetcode.com/problems/xor-queries-of-a-subarray/',
        level:'medium',
        website:'Leetcode',
        topics:['prefix sum']
    },
    {
        name:'Sum of floored pairs',
        link:'https://leetcode.com/problems/sum-of-floored-pairs/',
        level:'hard',
        website:'Leetcode',
        topics:['prefix sum']
    },
    {
        name:'Find the middle index in array',
        link:'https://leetcode.com/problems/find-the-middle-index-in-array/',
        level:'easy',
        website:'Leetcode',
        topics:['prefix sum']
    },
    {
        name:'Describe the painting',
        link:'https://leetcode.com/problems/describe-the-painting/',
        level:'medium',
        website:'Leetcode',
        topics:['prefix sum']
    },
    {
        name:'Minimum space wasted from packaging',
        link:'https://leetcode.com/problems/minimum-space-wasted-from-packaging/',
        level:'hard',
        website:'Leetcode',
        topics:['prefix sum']
    }
])
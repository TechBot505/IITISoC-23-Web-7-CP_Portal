const mongoose = require('mongoose');
const Product = require('./product');

mongoose.connect('mongodb://127.0.0.1:27017/trial1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

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
        

        
        
       
])

]

// Product.insertMany(seedProducts)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })
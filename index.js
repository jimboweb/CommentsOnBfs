

/*Of course Bowling Green was always in the same place
You take that for granted
When Pelham Parkway was in Queens once morning
They taped a poster to the white tile
But who'd read it that wasn't going there?
They walked right by it, looking for dessert.
*/



/*The first step is always to make a model
The hard part isn't knowing things
But choosing the things you won't know
*/


/*She was annoyed and a little embarrassed
Texting her place was at the end of the F tonight
The 4 train was more reliable
But who can afford a neighborhood
That never moves? */



/*When 79th street found itself at king's highway
Well, for one thing the book party was ruined
No one's riding out there
Even for free rose.*/

/*That's when we knew something had to be done
What if the Museum of Natural History
Ended up in Kew Gardens? City Hall
Out by Avenue U or Willets Point? */

/**
 * Let's think of the stations we can get to in one stop,
 * she said. Then one stop from there.
 * @param theMap changes every day, every minute, before your eyes, or we wouldn't need this
 * @param start so we're here
 * @param finish and we need to get there
 * @returns not the path, but a tree, one stop to the next, nd what came before
 * @constructor
 */
function BreadthFirstSearch(theMap, start, finish){
    // This poem would like permission
    // to use your location. The price
    // of always knowing where you are. Allow?
    // Block? Add it to the list. Remember
    let queue = [start];
    //  where you were before. Broadway-Lafayette.
    //  To Spring Street, those vaccuum cleaners
    //  on display in the lobby. To 2nd Ave, Verkovena,
    //  tilted pool table like home. To West 4th stop,
    //  like Butterfly said. Before you began
    let parents = new Array(theMap.length);
    // cannot be undefined. The ontological argument. For
    // convenience say God is just one less than zero.
    parents[start]=-1;
    // Until you get where you're going, or run out trying.
    // Until Canarsie, Jamaican places
    // had the veggie patties sometimes. To Coney Island,
    // the jellyfish in uv light and the seals.
    while(queue.length>0){
        //
        let current = queue.shift();
        // Reach what you can touch.
        for(let node of theMap[current]){
            // Now I had a Boolean array here,
            // but if you know where you came from
            // you've been there. If I walk down 3rd St.,
            // it's like Tribes is still there. The Odeon,
            // I can find for you no matter
            // how long it's been.
            if(parents[node]===undefined){
                parents[node]=current;
                queue.push(node);
                if(node===finish){
                    return parents;
                }
            }
        }
    }
   throw "no path found";
}

function traceBack(previousStops,end,start){
    let next = end;
    let path = [];
    path.unshift(next);
    do{
        next = previousStops[next];
        path.unshift(next);
    } while (next!==start);
    return path;
}

function findPath(graph, start, end){
    let parents = BreadthFirstSearch(graph,start,end);
    return traceBack(parents, end, start);
}




const input = `2 1
3 2
0 1
1`


function DrawTheMap(input){
    return input
        .split("\n")
        .map(line=>
            line.split(" ")
                .map(string=>parseInt(string))
        )
}

let g = DrawTheMap(input);
let start = 0;
let end = 3;
let parents = BreadthFirstSearch(g,start,end);

let path = traceBack(parents, end, start);

console.log(path);

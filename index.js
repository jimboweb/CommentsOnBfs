



/**
 * Let's think of the stations we can get to in one stop,
 * she said. Then one stop from there.
 * @param theMap changes every day, every minute, before your eyes, or we wouldn't need this
 * @param start so we're here
 * @param finish and we need to get there
 * @returns not the path, but a tree, one stop to the next, and what came before
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
        // Think of a line, like you're getting into PS1
        // where Jeff danced in the fountain while we sipped
        // wine and IPAs. It's just a fancy British word
        // for the same thing. When you leave the museum
        let current = queue.shift();
        // Reach what you can touch.
        for(let node of theMap[current]){
            // Now I had a Boolean array here,
            // but if you know where you came from
            if(parents[node]===undefined){
                // you've been there. If I walk down 3rd St.,
                // it's like Tribes is still there. The Odeon,
                // I can find for you no matter
                // how long it's been.
                parents[node]=current;
                // it's like every step is the parent
                // of the next.
                queue.push(node);
                if(node===finish){
                    // then you're there. Wherever you
                    // were supposed to go, the red pin where
                    // the interview, new apartment your lover
                    // and a cocktail. This is important,
                    // give back every step that got you there.
                    return parents;
                }
            }
        }
    }
   // It can happen. Nothing returns. They all started out
   // with bad directions.
   throw "no path found";
}

/**
 * Take me back. Every step. Forget the dead ends.
 * Just the shortest path.
 * @param previousStops every child knows nothing but what led to it.
 * @param end We put his first, because we're going backward.
 * @param start seems so long ago, doesn't it?
 * @returns {Array} This is what you were looking for, the way. But it's too late you already did it.
 */
function traceBack(previousStops,end,start){
    let next = end;
    // A stack is like a pile of Metro papers, the first one down
    // the first one they take.
    let path = [];
    // Other languages would say 'pop'. In others, remembering the stop
    // and forgetting it are two different operations. When memory
    // is important. So much I forgot.
    path.unshift(next);
    do{
        // We do it this way to run one last time
        // when we're back to the beginning,
        // so we remember that too.
        next = previousStops[next];
        // It's sloppy we had to do this before the loop.
        path.unshift(next);
    } while (next!==start);
    return path;
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

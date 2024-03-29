
/*
* This poem is written as comments on a working implementation
* of the breadth first search algorithm, which efficiently finds the shortest
* path through nodes connected with edges, such as subway stations.
* Anything after two slashes or in a section with stars like this
* is a comment. Everything else is the computer code.
* Github source at https://github.com/jimboweb/CommentsOnBfs.
*/


/**
 * Let's think of the stations we can get to in one stop,
 * she said. Then one stop from there. Spread like a stain. 
 * Like sunlight, until you fall on the end. You'll find
 * the shortest way. Efficiently. The problem will grow.
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
    // In movies this happens when you die. I was concieved
    // with the epoch. Two billion or so seconds
    // is less than you think.
    let path = [];
    // Other languages would say 'pop'. In others, remembering the stop
    // and forgetting it are two different operations. When memory
    // is important. So much I forgot.
    path.unshift(next);
    do{
        // Will I get to play this back
        // from the beginning? Must I? You want to know
        // what do we get? We only see so many moments
        // out the window as the station rolls by.
        // That's why movies fool us so easily.
        next = previousStops[next];
        // In San Francisco, you swipe to leave. What if
        // you couldn't afford for life to let you go?
        // Be thankful we can always get out here.
        path.unshift(next);
    } while (next!==start);
    // Nothing written beyond this will happen. Forgive
    // me and I'll forgive you. The rest is easy.
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

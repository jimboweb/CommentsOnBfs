

/*Of course Bowling Green was always in the same place
You take that for granted
When Pelham Parkway was in Queens once morning
They taped a poster to the white tile
But who'd read it that wasn't going there?
They walked right by it, looking for dessert.
*/

/**
 * They talked about the cronut lines, how
 * you can get them anywhere now. Van Halen, he said,
 * Sold out a show in Albuquerque in an hour.
 * She ordered a new iPhone online, it was easy.
 * And still they line up in front of the store.
 */
class FirstComeFirstServed{
    /**
     * Odd that every line starts empty.
     * To be the first.
     */
    constructor(){
        //the IDE says this can be simplified,
        //but it's easier to read this way
        this.queue = new Array();
    }

    /**
     * They found a place for lunch. Fifteen
     * minute wait. But everywhere else was more crowded.
     * @param stander
     */
    takeANumber(stander){
        this.queue.push(stander);
    }

    /**
     * We'll get our table eventually, right?
     * @returns the people who got here after us, knowing our luck.
     */
    neeext(){
        return this.queue.shift();
    }

    /**
     * If we keep asking the hostess will get annoyed.
     * Just be patient.
     * @returns way more than we were hoping for
     */
    howManyNow(){
        return this.queue.length;
    }

    /**
     * And it ends empty too.
     * @returns the line is finished or it's not.
     */
    isThatIt(){
        return this.howManyNow()===0;
    }
}

/*The first step is always to make a model
The hard part isn't knowing things
But choosing the things you won't know
*/
class Station {
    constructor(index, nextStops){
        this.nextStops = nextStops;
        this.beenThere = false;
    }
}


/*She was annoyed and a little embarrassed
Texting her place was at the end of the F tonight
The 4 train was more reliable
But who can afford a neighborhood
That never moves? */



/*When 79th street found itself at king's highway
Well, for one thing the book party was ruined
No one's riding out there
Even for free rose.*/

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
    let firstComeFirstServed = new FirstComeFirstServed();
    firstComeFirstServed.takeANumber(start);
    theMap[start].beenThere = true;
    let previousStops = new Array(theMap.length);
    while(!firstComeFirstServed.isThatIt()){
        let current = firstComeFirstServed.neeext();
        for(let station of theMap[current].nextStops){
            if(!theMap[station].beenThere){
                previousStops[station]=current;
                firstComeFirstServed.takeANumber(station)
                theMap[station].beenThere = true;
            }
            if(station===finish){
                return previousStops;
            }
        }
    }
    console.log ("no path found");
}

/*That's when we knew something had to be done
What if the Museum of Natural History
Ended up in Kew Gardens? City Hall
Out by Avenue U or Willets Point? */



function traceBack(previousStops,end,start){
    let next = end;
    let path = []
    path.unshift(next);
    do{
        next = previousStops[next];
        path.unshift(next);
    } while (next!==start);
    return path;
}






const input = `
2 1
3 2
0 1
1
`


function DrawTheMap(input){
    return input
        .split("\n")
        .filter(notEmpty)
        .map(lineToNumbers)
        .map(arrayToGraphNode);
}

function arrayToGraphNode(arr,i){
    return new Station(i,arr);
}

function lineToNumbers(line){
    return line.split(" ")
        .filter(notEmpty)
        .map(stringToNumber);
}

function stringToNumber(numString){
    return parseInt(numString);
}

function notEmpty(string){
    return string.length>0;
}



let g = DrawTheMap(input);
let start = 0;
let end = 3;
let parents = BreadthFirstSearch(g,start,end);

let path = traceBack(parents, end, start);

console.log(path);

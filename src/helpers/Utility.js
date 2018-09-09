//data is the array list from response JSON

export function getUniqueCities(data){
    let unique = [...new Set(data.map(items => items.departure))]
    return unique
}

export function getCheapestCities(data){
    var unique = [...new Set(data.map(items => items.departure))]
    var obj = {}
    for (let i in unique) {
        obj[unique[i]] = []
    }
    for (let i in unique) {
        var result = data.filter(item => item.departure === unique[i]);
        obj[unique[i]] = result;
    }
    var cheapest = {}
    for (let i in unique) {
        cheapest[unique[i]] = []
    }
    //inserting data
    for (var i in unique) {
        var uniquearrivals = [...new Set(obj[unique[i]].map(item => item.arrival))]
        // console.log("uniquearrivals" + uniquearrivals)
        for (var j in uniquearrivals) {
            // eslint-disable-next-line
            var uniquearrivalsdataslice = obj[unique[i]].filter(item => item.arrival === uniquearrivals[j]);
            // console.log("uniquearrivalsdataslice" + JSON.stringify(uniquearrivalsdataslice))
            var leastCost = Math.min(...uniquearrivalsdataslice.map(item => {
                if (item.discount > 0) {
                    // console.log("item.cost" + item.cost)
                    // console.log("item.discount" + item.discount)
                    return item.cost * item.discount / 100
                } else {
                    return item.cost
                }
            }))
            var itemSlice = {};
            // eslint-disable-next-line
            obj[unique[i]].filter(item => {
                if (item.discount > 0) {
                    if (item.arrival === uniquearrivals[j] && item.cost * item.discount / 100 === leastCost) {
                        itemSlice = { transport: item.transport, arrival: item.arrival, cost: leastCost, reference: item.reference };
                        // console.log("itemslice :"+ JSON.stringify(itemSlice))
                        return itemSlice
                    }
                } else if (item.arrival === uniquearrivals[j] && item.cost === leastCost) {
                    itemSlice = { transport: item.transport, arrival: item.arrival, cost: leastCost, reference: item.reference };
                    // console.log("itemslice :"+ JSON.stringify(itemSlice))
                    return itemSlice
                }
            })
            // console.log("leastCost" + leastCost)
            cheapest[unique[i]].push(itemSlice)
        }
    } 
    return cheapest  
}



// function dijkstra(){
// //diksjstra's algo

// const lowestCostNode = (costs, processed) => {

//     return Object.keys(costs).reduce((lowest, node) => {

//         if (lowest === null || costs[node] < costs[lowest]) {

//             if (!processed.includes(node)) {

//                 lowest = node;

//             }

//         }

//         return lowest;

//     }, null);

// };



// // function that returns the minimum cost and path to reach Finish

// const dijkstra = (graph, startNodeName, endNodeName) => {



//     // track the lowest cost to reach each node

//     let costs = {};

//     costs[endNodeName] = "Infinity";



//     var costsSlice = {}

//     // var costsSliceCopy = []

//     for (let i in graph[startNodeName]) {

//         costsSlice[graph[startNodeName][i].arrival] = graph[startNodeName][i].cost

//         // let obj = {}

//         // obj["departure"] = startNodeName;

//         // obj["arrival"] = graph[startNodeName][i].arrival;

//         // obj["transport"]=graph[startNodeName][i].transport;

//         // obj["cost"]=graph[startNodeName][i].cost;

//         // obj["reference"]=graph[startNodeName][i].reference;

//         // costsSliceCopy.push(obj)

//     }



//     console.log("costsSlice" + JSON.stringify(costsSlice))

//     // console.log("costsSliceCopy" + JSON.stringify(costsSliceCopy))



//     //costs = Object.assign(costs, graph[startNodeName]);

//     costs = Object.assign(costs, costsSlice);

//     console.log("costs :" + JSON.stringify(costs))

//     // track paths

//     let parents = {};

//     parents[endNodeName] = null;

//     for (let child in costsSlice) {

//         parents[child] = startNodeName;

//     }



//     console.log("parents :" + JSON.stringify(parents))

//     // track nodes that have already been processed

//     const processed = [];



//     let node = lowestCostNode(costs, processed);



//     // console.log("node :" + node)



//     while (node) {

//         let cost = costs[node];

//         var childrenSlice = {}

//         for (let i in graph[node]) {

//             childrenSlice[graph[node][i].arrival] = graph[node][i].cost

//         }

//         //let children = graph[node];

//         let children = childrenSlice;

//         for (let n in children) {

//             if (String(n) === String(startNodeName)) {

//                 // console.log("WE DON'T GO BACK TO START");

//             } else {

//                 // console.log("StartNodeName: " + startNodeName);

//                 // console.log("Evaluating cost to node " + n + " (looking from node " + node + ")");

//                 // console.log("Last Cost: " + costs[n]);

//                 let newCost = cost + children[n];

//                 // console.log("New Cost: " + newCost);

//                 if (!costs[n] || costs[n] > newCost) {

//                     costs[n] = newCost;

//                     parents[n] = node;

//                     // console.log("Updated cost und parents");

//                 } else {

//                     // console.log("A shorter path already exists");

//                 }

//             }

//         }

//         processed.push(node);

//         node = lowestCostNode(costs, processed);

//         // console.log("node :" + node)

//     }

//     console.log("costs :" + JSON.stringify(costs))

//     let optimalPath = [endNodeName];

//     let parent = parents[endNodeName];

//     while (parent) {

//         optimalPath.push(parent);

//         parent = parents[parent];

//     }

//     optimalPath.reverse();

//     var detailedoptimalPath = []
//     for (let i in optimalPath) {

//         var indGraph = graph[optimalPath[i]]

//         for (let j in indGraph) {

//             console.log(optimalPath[parseInt(i) + 1])

//             if (indGraph[j].arrival == optimalPath[parseInt(i) + 1]) {

//                 var newObj = Object.assign({}, { "departure": optimalPath[i] }, indGraph[j])

//                 console.log("newObj :" + JSON.stringify(newObj))

//                 detailedoptimalPath.push(newObj)

//             }

//         }

//     }

//     console.log("detailedoptimalPath :" + JSON.stringify(detailedoptimalPath))



//     const results = {

//         distance: costs[endNodeName],

//         path: optimalPath

//     };

//     // console.log("results :" + JSON.stringify(results))

//     return results;

// };



// console.log(dijkstra(cheapest, "London", "Brussels")); 
// }

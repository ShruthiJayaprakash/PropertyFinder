//data is the array list from response JSON

export function getUniqueCities(data) {
    let unique = [...new Set(data.map(items => items.departure))]
    return unique
}

export function getCheapestCities(data) {
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
        for (var j in uniquearrivals) {
            var uniquearrivalsdataslice = obj[unique[i]].filter(item => item.arrival === uniquearrivals[j]);
            var leastCost = Math.min(...uniquearrivalsdataslice.map(item => {
                if (item.discount > 0) {
                    return item.cost * item.discount / 100
                } else {
                    return item.cost
                }
            }))
            var itemSlice = {};
            obj[unique[i]].filter(item => {
                if (item.discount > 0) {
                    if (item.arrival === uniquearrivals[j] && item.cost * item.discount / 100 === leastCost) {
                        itemSlice = { transport: item.transport, arrival: item.arrival, cost: leastCost, reference: item.reference, duration: item.duration.h + ':' + item.duration.m };
                        return itemSlice
                    }
                } else if (item.arrival === uniquearrivals[j] && item.cost === leastCost) {
                    itemSlice = { transport: item.transport, arrival: item.arrival, cost: leastCost, reference: item.reference, duration: item.duration.h + ':' + item.duration.m };
                    return itemSlice
                }
            })
            cheapest[unique[i]].push(itemSlice)
        }
    }
    return cheapest
}

export function getFastestCities(data) {
    var unique = [...new Set(data.map(items => items.departure))]
    var obj = {}
    for (let i in unique) {
        obj[unique[i]] = []
    }
    for (let i in unique) {
        var result = data.filter(item => item.departure === unique[i]);
        obj[unique[i]] = result;
    }
    var fastest = {}
    for (let i in unique) {
        fastest[unique[i]] = []
    }
    //inserting data
    for (var i in unique) {
        var uniquearrivals = [...new Set(obj[unique[i]].map(item => item.arrival))]
        for (var j in uniquearrivals) {
            var uniquearrivalsdataslice = obj[unique[i]].filter(item => item.arrival === uniquearrivals[j]);
            var leastDistance = Math.min(...uniquearrivalsdataslice.map(item => {
                    return parseInt((item.duration.h*60),10)+ parseInt(item.duration.m,10)
            }))
            var itemSlice = {};
            obj[unique[i]].filter(item => {
                    if (item.arrival === uniquearrivals[j] && parseInt((item.duration.h*60),10)+ parseInt(item.duration.m,10) === leastDistance) {
                        itemSlice = { transport: item.transport, arrival: item.arrival, cost: item.cost, reference: item.reference, duration: item.duration.h + ':' + item.duration.m };
                        return itemSlice
                    }
            })

            fastest[unique[i]].push(itemSlice)
        }
    }
    return fastest
}


// function dijkstra() {
//diksjstra's algo
const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};
// function that returns the minimum cost and path to reach Finish
export const dijkstra = (graph, startNodeName, endNodeName) => {
    // track the lowest cost to reach each node
    let costs = {};
    costs[endNodeName] = "Infinity";
    var costsSlice = {}
    for (let i in graph[startNodeName]) {
        costsSlice[graph[startNodeName][i].arrival] = graph[startNodeName][i].cost
    }
    costs = Object.assign(costs, costsSlice);
    // track paths
    let parents = {};
    parents[endNodeName] = null;
    for (let child in costsSlice) {
        parents[child] = startNodeName;
    }
    // track nodes that have already been processed
    const processed = [];
    let node = lowestCostNode(costs, processed);
    while (node) {
        let cost = costs[node];
        var childrenSlice = {}
        for (let i in graph[node]) {
            childrenSlice[graph[node][i].arrival] = graph[node][i].cost
        }
        let children = childrenSlice;
        for (let n in children) {
            if (String(n) === String(startNodeName)) {
            } else {
                let newCost = cost + children[n];
                if (!costs[n] || costs[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                } else {
                    // console.log("A shorter path already exists");
                }
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }
    let optimalPath = [endNodeName];
    let parent = parents[endNodeName];
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();
    var detailedoptimalPath = []
    for (let i in optimalPath) {
        var indGraph = graph[optimalPath[i]]
        for (let j in indGraph) {
            if (indGraph[j].arrival === optimalPath[parseInt(i) + 1]) {
                var newObj = Object.assign({}, { "departure": optimalPath[i] }, indGraph[j])
                detailedoptimalPath.push(newObj)
            }
        }
    }
    var distanceSum = 0
    for(let i in detailedoptimalPath){
        let durationSplit = detailedoptimalPath[i].duration.split(':');
        distanceSum += parseInt(durationSplit[0],10)*60 + parseInt(durationSplit[1],10)
    }
 
    var minutes = distanceSum % 60;
    var hours = (distanceSum - minutes) / 60;

    const results = {
        distance: costs[endNodeName],
        duration:hours+'h :'+minutes,
        path: optimalPath,
        detailedPath: detailedoptimalPath
    };
    return results;
};
// }

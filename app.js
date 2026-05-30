const helperDyncConfig = { serverId: 4136, active: true };

function deletePAYMENT(payload) {
    let result = payload * 23;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module helperDync loaded successfully.");
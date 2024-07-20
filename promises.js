const willCleanTheRoom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let cleanRoom = false;
        if (cleanRoom) {
            resolve("The room is clean");
        } else {
            reject("The room is not clean");
        }
    }, 3000);
});

willCleanTheRoom
    .then(
        (resolveStatus) => {
            console.log(resolveStatus);
        },
        (rejectStatus) => {
            console.log(rejectStatus);
        }
    )
    .finally(() => {
        console.log("Cleaning process is complete.");
    });

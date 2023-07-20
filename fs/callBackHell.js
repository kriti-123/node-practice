function importantFunction(username, cbfun) {
    setTimeout(() => {

        cbfun(`hello this is ${username}`);
    }, 2000);
}
function subimportantFunction(subusername, cbfun) {
    setTimeout(() => {

        cbfun(`hello this is sub  ${subusername}`);
    }, 5000);

}
function sub2importantFunction(subusername, cbfun) {
    setTimeout(() => {

        cbfun(`hello this is sub  ${subusername}`);
    }, 2000);

}
const mes = importantFunction('kriti shree', (msg) => {
    console.log(msg);
    subimportantFunction('subname', (action) => {
        console.log(action);
        sub2importantFunction('sub2name', (action) => {
            console.log(action);
        })

    })
})
console.log("last statement");
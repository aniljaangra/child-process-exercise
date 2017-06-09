/**
 * Created by anil on 23/6/16.
 */

process.on('message',function(msg){
    start();
})

function start() {
    let i = 0;

    console.log("Started CPU Intensive Operation On Child Process")
    console.time("Background CPU Intensive Operation")
    var time = new Date().getTime();
    for( i = 0 ; i < 10000 ; i++){}
    console.timeEnd("Background CPU Intensive Operation")
    process.send( new Date().getTime() - time )
}


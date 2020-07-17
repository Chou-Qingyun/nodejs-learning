module.exports = function(playerAction) {

    if (['rock', 'scissor', 'paper'].indexOf(playerAction) === -1) {
        throw new Error('invalid playerAction');
    }

    var computerAction;
    var random = Math.random() * 3;

    if (random < 1) {
        computerAction = 'rock';
    } else if (random > 2) {
        computerAction = 'scissor';
    } else {
        computerAction = 'paper';
    }
    console.log(`computerAction: ${computerAction} VS playerAction: ${playerAction}`);
    if (computerAction === playerAction) {
        console.log('平局');
        return 0;
    } else if (
        (computerAction === 'paper' && playerAction === 'scissor') ||
        (computerAction === 'rock' && playerAction === 'paper') ||
        (computerAction === 'scissor' && playerAction === 'rock')
    ) {
        console.log('您赢了');
        return 1;
    } else {
        console.log('您输了！');
        return -1;
    }

}
export class Order{
    data=[
        {
            "gameFlow": [1,6,4,7,3,2,5,8]
        },
        {
            "gameFlow": [4,7,2,5,3,6,1,8]
        },
        {
            "gameFlow": [2,6,7,4,5,1,3,8]
        },
        {
            "gameFlow": [7,5,1,3,4,2,6,8]
        },
        {
            "gameFlow": [5,1,2,6,3,4,7,8]
        },
        {
            "gameFlow": [6,7,2,3,5,4,1,8]
        },
        {
            "gameFlow": [3,2,6,5,7,1,4,8]
        },
        {
            "gameFlow": [1,2,3,6,4,7,5,8]
        },
        {
            "gameFlow": [4,6,3,1,7,5,2,8]
        },
        {
            "gameFlow": [7,5,1,3,6,4,2,8]
        }
    ]
    getGameFlow(numGamelow){
        return (this.data[numGamelow-1])
    }
}
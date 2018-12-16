app.factory('customerList', [function() {
    let demoList = {
        customers : [
                        {
                            firstName: 'Ivan',
                            lastName: 'Ong',
                            country: 'Singapore',
                            lastPurchased: '2018-12-12',
                            notes: 'fussy buyer, beware!',
                            custId: 0
                        },
                        {
                            firstName: 'Georgie',
                            lastName: 'Bunny',
                            country: 'Carrot Kingdom',
                            lastPurchased: '2015-01-01',
                            notes: 'Likes carrots & meat',
                            custId: 1
                        },
                        {
                            firstName: 'Meatloaf',
                            lastName: 'TheCat',
                            country: 'HDB corridor',
                            lastPurchased: '2014-04-04',
                            notes: 'Always lazy to pay',
                            custId: 2
                        },      
                        {
                            firstName: 'Whack-it',
                            lastName: 'Ralph',
                            country: 'arcade',
                            lastPurchased: '1980-05-19',
                            notes: 'likes cyptocurrency',
                            custId: 3
                        },           
        ]
    }
    return demoList;
}]);
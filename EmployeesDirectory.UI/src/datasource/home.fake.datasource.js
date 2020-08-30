export function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                result: {
                    code: 0,
                    description: "success"
                },  
                data: [
                    {
                        id: "1",
                        title: "Hamburg"
                    },
                    {
                        id: "2",
                        title: "Beirut"
                    },
                    {
                        id: "3",
                        title: "Madrid"
                    },
                    {
                        id: "4",
                        title: "Rome"
                    }

                ]
            });
        }, 300);
    });
} 

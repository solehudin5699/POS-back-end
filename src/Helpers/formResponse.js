const responseResult = {
    postSuccess: (res, statusResponse, newData) => {
        const responseObject = {
            success: true,
            status: 200,
            postResponse: statusResponse,
            newData: {
                ...newData
            }
        };
        res.json(responseObject);
    },

    getSuccess: (res, result) => {
        const responseObject = {
            success: true,
            status: 200,
            listProduct: result,
        };
        res.json(responseObject);
    },

    searchSuccess: (res, result) => {
        let responseObject;
        if (result.length == 0) {
            responseObject = {
                response: "Data is not found"
            }
        } else {
            responseObject = {
                success: true,
                status: 200,
                listProduct: result,
            };
        }
        res.json(responseObject);
    },

    updateSuccess: (res, updatedProduct) => {
        const responseObject = {
            success: true,
            status: 200,
            updatedProduct: updatedProduct
        };
        res.json(responseObject);
    },

    deleteSuccess: (res, statusResponse) => {
        const responseObject = {
            success: true,
            status: 200,
            deleteResponse: statusResponse
        };
        res.json(responseObject);
    },

    error: (res, error) => {
        const responseObject = {
            success: false,
            status: 500,
            error: error,
        };
        res.json(responseObject);
    }
};

module.exports = responseResult;
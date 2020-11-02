const responseResult = {
  postSuccess: (res, newData) => {
    const responseObject = {
      success: true,
      status: 200,
      newData: {
        ...newData,
      },
    };
    res.json(responseObject);
  },

  success: (res, data) => {
    const responseObject = {
      success: true,
      status: 200,
      data: data,
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
        success: true,
        status: 200,
        searchStatus: "Data is not found",
        listProduct: result,
      };
    } else {
      responseObject = {
        success: true,
        status: 200,
        searchStatus: "Data is found",
        listProduct: result,
      };
    }
    res.json(responseObject);
  },

  updateSuccess: (res, updatedProduct) => {
    const responseObject = {
      success: true,
      status: 200,
      updatedProduct: updatedProduct,
    };
    res.json(responseObject);
  },

  deleteSuccess: (res, statusResponse) => {
    const responseObject = {
      success: true,
      status: 200,
      deleteResponse: statusResponse,
    };
    res.json(responseObject);
  },
  registSuccess: (res, data) => {
    const responseObject = {
      success: true,
      status: 200,
      data: data,
    };
    res.json(responseObject);
  },
  loginSuccess: (res, data) => {
    const responseObject = {
      success: true,
      status: 200,
      data: data,
    };
    res.json(responseObject);
  },
  paginationSucces: (req, res, data) => {
    const { name, sortBy, orderBy, page, limit } = req.query;
    const currentPage = Number(page);
    const numLimit = Number(limit);
    const lengthDataAll = data.dataAll.length;
    const totalPage = Math.ceil(lengthDataAll / numLimit);
    const prevPage =
      currentPage == 1
        ? ""
        : `/products/search?name=${name}&sortBy=${sortBy}&orderBy=${orderBy}&limit=${numLimit}&page=${
            currentPage - 1
          }`;
    const nextPage =
      currentPage < totalPage
        ? `/products/search?name=${name}&sortBy=${sortBy}&orderBy=${orderBy}&limit=${numLimit}&page=${
            currentPage + 1
          }`
        : "";
    const responseObject = {
      success: true,
      status: 200,
      data: data.data,
      pageInfo: {
        currentPage,
        limit: numLimit,
        prevPage,
        nextPage,
      },
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
  },
};

module.exports = responseResult;

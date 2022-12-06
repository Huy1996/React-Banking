import * as tc from "../constants/TransactionConstant";

export const transactionListReducer = (state={loading: false, transactionList:[]}, action) => {
    switch(action.type){
        case tc.TRANSACTION_LIST_REQUEST:
            return {
                loading: true,
                transactionList: []
            };
        case tc.TRANSACTION_LIST_SUCCESS:
            return {
                loading: false,
                transactionList: action.payload
            }
        case tc.TRANSACTION_LIST_FAIL:
            return {
                loading: false,
                transactionList: [],
                error: action.payload
            };
        default:
            return state;
    }
}

export const transferReducer = (state={loading: false, success: false}, action) => {
    switch (action.type){
        case tc.TRANSFER_REQUEST:
            return {
                loading: true,
            };
        case tc.TRANSFER_SUCCESS:
            return {
                loading: false,
                success: true,
                transaction: action.payload
            }
        case tc.TRANSFER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
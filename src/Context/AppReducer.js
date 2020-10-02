export default (state, action) => {
    switch (action.type) {
        case 'Add_transaction':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case 'Delete_transaction':
            return {
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
            }

        default:
            return state;
    }

}
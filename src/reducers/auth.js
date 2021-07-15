//userReducer
const authReducer = (state,action) =>
{
    switch(action.type)
    {
        case 'SIGN__UP':
            return {
                _id:action.user._id,
                firstName:action.user.firstName,
                email:action.user.email,
                password:action.user.password,
                photoUrl:action.user.photoUrl,
                token:action.token
            };
        case 'SIGN__IN':
            return {
                _id:action.user._id,
                firstName:action.user.firstName,
                email:action.user.email,
                password:action.user.password,
                photoUrl:action.user.photoUrl,
                token:action.token
            };
        case 'SIGN__OUT':
            return null;
            
        default:
            return state;
    }
};

export default authReducer;
//action generators

export const signUp = (object) =>
{
    return {
        type:'SIGN__UP',
        user:object.user,
        token:object.token
    }
};

export const signIn = (object) =>
{
    return {
        type:'SIGN__IN',
        user:object.user,
        token:object.token
    }
};

export const signOut = () =>
{
    return {
        type:'SIGN__OUT'
    }
};
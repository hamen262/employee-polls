
const checkAuthedUser = (store) => (next) => (action) => {

    const { authedUser } = store.getState();
    if (authedUser) {
     return next(action);
    }
  
    window.location.replace("/");
    return false;
};

export default checkAuthedUser;

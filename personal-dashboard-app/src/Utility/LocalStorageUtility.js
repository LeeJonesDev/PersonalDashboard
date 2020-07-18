export const getLayoutsFromLocalStorage = (key) => {
    let localStorage = {};
    if (global.localStorage) {
        try {
            localStorage = JSON.parse(global.localStorage.getItem("personal-dashboard")) || {};
        } catch (e) {
        /*Ignore*///TODO: why do we ignore this?
        }
    }
    return localStorage[key];
}
  
export const saveLayoutsFromLocalStorage = (key, value) => {
    if (global.localStorage) {
        global.localStorage.setItem("personal-dashboard", JSON.stringify({[key]: value}));
    }
}
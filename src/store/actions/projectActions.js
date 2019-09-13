export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore} ) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,                      // ...project spreads the object 'project;
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorID: authorID,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
        
    }
};
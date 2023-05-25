export const fetchItems = (url, ACTION_NAME) => async (dispatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: ACTION_NAME, payload: data });
  } catch (error) {
    console.error('ERROR FETCH ITEMS');
  }
};
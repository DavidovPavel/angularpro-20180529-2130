# Ngrx

## Redux

- state
- reducer
- dispatch
- Store


Store {
  state

  private reducer(state, action) {
    switch(action) {

        return state.copy();

    }
  }

  dispatch(action) {
     return reducer(state, action)
  }
}

action: {type: string, payload: any}


## ngRx <= Angular(Redux + Rxjs)

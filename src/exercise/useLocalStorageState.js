import React, {useEffect, useState} from 'react'

export const useLocalStorageState = (stateName, initialState) => {
  const [state, setState] = useState(
    () => window.localStorage.getItem(stateName) || initialState,
  )

  useEffect(() => {
    window.localStorage.setItem(stateName, state)
  }, [state])

  return [state, setState]
}

import {useCallback} from 'react'

export const useMessage = () => {
  return useCallback(text => {
    if (window.M && text) {
      console.log(text)
      text = `<h5 class="black-text text-darken-2">${text}</h5>`
      window.M.toast({ html: text })
    }
  }, [])
}
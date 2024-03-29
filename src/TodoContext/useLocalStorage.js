import { useEffect, useState } from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  })

  const saveItem = (newItem) => {
    try {
      const stringyfiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringyfiedItem)

      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return { error, item, loading, saveItem }
}

export { useLocalStorage }

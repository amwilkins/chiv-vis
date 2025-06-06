"use client"

import { useEffect, useState } from "react"

function useDebounce<T>(value: T, delay = 250): T {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const id = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(id)
		}
	}, [value, delay])

	return debouncedValue
}

export default useDebounce

const unpackingObject = obj => {
	if (Array.isArray(obj)) return obj
	return Object.entries(obj).flat()[1]
}

export default unpackingObject

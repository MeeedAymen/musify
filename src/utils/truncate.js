export const truncate = (string, n = 200) => {
    return (string.length > n ? string.slice(0, n) + '...' : string)
}
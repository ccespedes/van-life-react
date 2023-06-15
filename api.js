// import vanData from "/vanData.js";

// export async function getVans() {
//     const res = await vanData
//     return vanData.data.vans
// }

export async function getVans() {
    const res = await fetch("/api/vans/")
    const data = await res.json()
    return data.vans
}
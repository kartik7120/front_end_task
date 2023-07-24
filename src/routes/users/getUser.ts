export function loader() {
    return {
        name: localStorage.getItem("name"),
        phone: localStorage.getItem("phone"),
        email: localStorage.getItem("email")
    }
}
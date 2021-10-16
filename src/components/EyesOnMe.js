// Code EyesOnMe Component Here
function EyesOnMe() {
    return (
        <button onFocus={() => console.log("Good!")} onBlur={() => "Hey! Eyes on me!"}>Eyes on me</button>
    )
}

export default EyesOnMe
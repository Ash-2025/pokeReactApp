export default function Button({ name, isDisabled = false, handleClick }) {
    return (
        isDisabled ? (
            <button className="bg-black border-2 border-white w-auto px-4 text-white font-inter rounded-lg text-center text-[1.5rem] cursor-not-allowed tracking-wide" disabled >
                  {name}
            </button>
        ) : (
            <button className="bg-black border-2 border-white w-auto px-4 rounded-lg text-center text-white font-inter text-[1.5rem] tracking-wide" onClick={handleClick}>
                  {name}
            </button>
        )
    )
}
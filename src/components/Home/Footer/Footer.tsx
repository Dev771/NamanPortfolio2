
const Footer = () => {
    return (
        <footer className="flex justify-between p-4 container">
            <div className="flex gap-2 cursor-pointer fill-white hover:text-cyan-300 hover:fill-cyan-300" onClick={() => { window.scrollTo(0, 0) }}>विषय पर वापस <UpArrow /></div>
            <div>Secert Tab</div>
        </footer>
    )
}

const UpArrow = () => (
    <svg width="23" height="22" viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon">
            <path id="Vector" d="M12.1216 7.16825V18.3333H10.2882V7.16825L5.37491 12.0999L4.07324 10.7983L11.2049 3.66659L18.3366 10.7983L17.0349 12.0999L12.1216 7.16825Z" />
        </g>
    </svg>
)

export default Footer
import Title from './Title.jsx'

function ContainerLeft() {
    return(
        <div className="flex max-w-1/3 justify-between flex-col pl-40 pt-20 pb-20 min-h-dvh">
            <Title />
            <nav className="flex flex-col">
                <button className="text-(--primary) text-left">----- About</button>
                <button className="text-(--primary) text-left">----- Experience</button>
                <button className="text-(--primary) text-left">----- Projects</button>
            </nav>
            <div>
                <button className="text-(--primary) text-left">GitHub</button>
                <button className="text-(--primary) text-left">LinkedIn</button>
                <button className="text-(--primary) text-left">Devpost</button>
                <button className="text-(--primary) text-left">Coffee</button>
            </div>
        </div>
    )
}

export default ContainerLeft
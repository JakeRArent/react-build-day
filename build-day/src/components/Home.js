

export default function Home() {
    const [userName, setUserName] = useState(null)

    useEffect(() => {
        console.log('counter', counter)
        console.log('userName', userName)
    })

    function clickUp(){
        let counterCopy = counter;
        counterCopy++
        setCounter(counterCopy);

    }

    function handleSetUserName(name) {
        setUserName(name)
    }
}
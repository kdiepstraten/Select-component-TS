import { useState } from "react"
import { Select, SelectOption } from "./Select/Select.tsx"

const options = [
    { label: "Harry", value: 1 },
    { label: "Ron", value: 2 },
    { label: "Hermione", value: 3 },
    { label: "Hagrid", value: 4 },
    { label: "Dumbledore", value: 5 },
]

function App() {
    const [value1, setValue1] = useState<SelectOption[]>([options[0]])
    const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

    return (
        <>
            <Select
                multiple
                options={options}
                value={value1}
                onChange={o => setValue1(o)}
            />
            <br />
            <Select options={options} value={value2} onChange={o => setValue2(o)} />
        </>
    )
}

export default App
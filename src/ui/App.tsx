import "./App.css";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
    return (
        <MantineProvider>
            <DateInput
                //   value={value}
                //   onChange={setValue}
                label="Date input"
                placeholder="Date input"
            />
        </MantineProvider>
    );
}

export default App;

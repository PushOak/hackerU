import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useMemo, useRef, useState } from "react";
import AbcIcon from "@mui/icons-material/Abc";
import MyButton from "./MyButton";

export default function ShowData() {
    const first = useRef();
    const second = useRef();

    const [counter, setCounter] = useState(0);

    const showData = useCallback(() => {
        console.log(first.current.value);
        console.log(second.current.value);
    }, []);

    const showDataCapital = useCallback(() => {
        console.log(first.current.value.toUpperCase());
        console.log(second.current.value.toUpperCase());
        setCounter((prev) => prev + 1);
    }, []);

    const memoIcon = useMemo(() => {
        return <AbcIcon />
    }, [])

    return (
        <div>
            <Box>
                <TextField inputRef={first}></TextField>
                <TextField inputRef={second}></TextField>
                <MyButton handleClick={showData}>Show Data</MyButton>
                <MyButton handleClick={showDataCapital}>
                    {memoIcon}
                </MyButton>
                <Typography>
                    {counter}
                </Typography>
            </Box>
        </div>
    );
}
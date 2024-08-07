import {CreditForm} from "../../components/CreditForm/CreditForm.tsx";
import {Box} from "@mui/material";
import {useState} from "react";
import {CreditValues} from "../../components/CreditForm/types.ts";
import {CreditSchedule} from "../../components/CreditSchedule/CreditSchedule.tsx";

export const Credit = () => {
    const [creditValues, setCreditValues] =
        useState<CreditValues | null>(null)

    return <Box display="flex" flexDirection="column" gap={4}>
        <CreditForm onSubmit={setCreditValues}/>
        { creditValues && <CreditSchedule creditValues={creditValues} /> }
    </Box>
}
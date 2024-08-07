import {Box, Button} from "@mui/material";
import Input from '@mui/material/Input';
import {Label} from "../Label/Label.tsx";
import { useFormik } from 'formik';
import { initialValues, validationSchema} from './validation.ts';
import {CreditValues} from "./types.ts";

type Props = {
    onSubmit: (values: CreditValues) => void
}
export const CreditForm = ({ onSubmit }: Props) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            onSubmit(values)
        },
    });

    return <form onSubmit={formik.handleSubmit}>
        <Box display="grid" gridTemplateColumns="200px 200px">
            <Label hasError={Boolean(formik.errors.amount)}>
                Amount:
            </Label>
            <Input
                type="number"
                placeholder="Enter amount"
                name="amount"
                onChange={formik.handleChange}
                value={formik.values.amount}
                error={Boolean(formik.errors.amount)}
            />

            <Label hasError={Boolean(formik.errors.term)}>
                Credit term (Months):
            </Label>
            <Input
                type="number"
                placeholder="Enter credit term"
                name="term"
                onChange={formik.handleChange}
                value={formik.values.term}
                error={Boolean(formik.errors.term)}
            />

            <Label hasError={Boolean(formik.errors.rate)}>
                Interest rate (%):
            </Label>
            <Input
                type="number"
                placeholder="Enter interest rate"
                name="rate"
                onChange={formik.handleChange}
                value={formik.values.rate}
                error={Boolean(formik.errors.rate)}
            />
        </Box>
        <Button type="submit" variant="contained" disabled={!formik.isValid}> calculate </Button>
    </form>
}
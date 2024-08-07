import {ListChildComponentProps} from "react-window";
import {Payment} from "./types.ts";
import {TableCell, TableRow} from "@mui/material";

export const Row = ({ index, style, data }: ListChildComponentProps<Payment[]>) => {
    const payment = data[index];
    return (
        <TableRow style={style} key={index}>
            <TableCell style={{ width: 40 }}>{payment.month}</TableCell>
            <TableCell style={{ width: 55 }}>{payment.payment}</TableCell>
            <TableCell style={{ width: 55 }}>{payment.principal}</TableCell>
            <TableCell style={{ width: 55 }}>{payment.interest}</TableCell>
            <TableCell style={{ width: 10 }}>{payment.leftover}</TableCell>
        </TableRow>
    );
};
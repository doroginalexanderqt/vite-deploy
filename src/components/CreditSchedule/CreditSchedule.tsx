import {CreditValues} from "../CreditForm/types.ts";
import {Table} from "./Table.tsx";
import {useMemo} from "react";
import {getPaymentsSchedule} from "./getPaymentsSchedule.ts";

type Props = { creditValues: CreditValues }
export const CreditSchedule = ({ creditValues }: Props) => {
    // although its just a useMemo, but in some cases IMO I would add some caching for such values to not re-calculate them
    const schedule = useMemo(() => getPaymentsSchedule(creditValues), [creditValues])

    return <Table payments={schedule}/>
}


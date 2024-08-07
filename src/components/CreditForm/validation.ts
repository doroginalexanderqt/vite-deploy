import * as Yup from 'yup';
import {CreditValues} from "./types.ts";

export const initialValues: CreditValues = {
    amount: 0,
    term: 0,
    rate: 0,
};
export const validationSchema = Yup.object<CreditValues>({
    amount: Yup.number().required('Required').positive('Must be positive'),
    term: Yup.number().required('Required').positive('Must be positive'),
    rate: Yup.number().required('Required').positive('Must be positive'),
});
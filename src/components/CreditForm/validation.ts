import * as Yup from 'yup';
import {CreditValues} from "./types.ts";

export const initialValues: CreditValues = {
    amount: 10000,
    term: 36,
    rate: 17,
};
export const validationSchema = Yup.object<CreditValues>({
    amount: Yup.number().required('Required').positive('Must be positive'),
    term: Yup.number().required('Required').positive('Must be positive'),
    rate: Yup.number().required('Required').positive('Must be positive'),
});
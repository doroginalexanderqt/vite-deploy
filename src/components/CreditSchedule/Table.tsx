import {Table as MUITable, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import styled from '@emotion/styled';
import {FixedSizeList} from 'react-window';
import {Payment} from "./types.ts";
import {Row} from "./Row.tsx";

type Props = {
    payments: Payment[];
}

const TABLE_HEIGHT = 400
const ROW_HEIGHT = 40

export const Table = ({ payments }: Props) => {
    return (
        <TableContainerStyled>
            <MUITable>
                <TableHead>
                    <TableRow>
                        <TableCell>Month</TableCell>
                        <TableCell>Payment</TableCell>
                        <TableCell>Principal</TableCell>
                        <TableCell>Interest (%)</TableCell>
                        <TableCell>Leftover</TableCell>
                    </TableRow>
                </TableHead>
            </MUITable>
            <FixedSizeList
                height={TABLE_HEIGHT}
                itemCount={payments.length}
                itemSize={ROW_HEIGHT}
                width="100%"
                itemData={payments}
                style={{ overflow: 'auto' }}
            >
                {Row}
            </FixedSizeList>
        </TableContainerStyled>
    );
};

const TableContainerStyled = styled(TableContainer)`
  height: 460px;
  background-color: #fff;
  width: 100%;
`;

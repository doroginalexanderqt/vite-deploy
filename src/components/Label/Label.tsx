import styled from "@emotion/styled";
import React from "react";

type Props = {
    children: React.ReactNode
    hasError?: boolean
}
export const Label = ({children, hasError }: Props) => {
    return <LabelWrapper hasError={hasError} >
        { children }
    </LabelWrapper>
}

type LabelWrapperProps = Pick<Props, "hasError">
const LabelWrapper = styled.span<LabelWrapperProps>`
    color: ${({ hasError }) => hasError ? '#D32F2F' : 'cadetblue'};
`
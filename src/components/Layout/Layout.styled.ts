import styled from 'styled-components';
import {typography} from "_/global";

export const LayoutContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const Main = styled.main`
    ${typography.heading_l}
    flex: 1;
    width: 100%;
    min-width: 320px;
    padding: 24px 16px;

    background-color: var(--color-secondary-body-bg);
    color: var(--color-medium-grey);
`;

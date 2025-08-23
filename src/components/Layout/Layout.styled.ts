import styled from 'styled-components';
import { typography } from '../../../../kanban-task-management-web-app/src/global/utilities/typography.ts';

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

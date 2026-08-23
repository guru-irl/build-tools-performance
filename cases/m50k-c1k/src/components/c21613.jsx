import React from 'react';
const LABEL_21613 = 'component_21613';
export function Component21613({ value = 21613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21613, 'data-value': derived.doubled }, children);
}
export default Component21613;

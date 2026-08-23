import React from 'react';
const LABEL_12621 = 'component_12621';
export function Component12621({ value = 12621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12621, 'data-value': derived.doubled }, children);
}
export default Component12621;

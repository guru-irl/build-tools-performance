import React from 'react';
const LABEL_7496 = 'component_7496';
export function Component7496({ value = 7496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7496, 'data-value': derived.doubled }, children);
}
export default Component7496;

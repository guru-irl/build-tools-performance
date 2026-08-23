import React from 'react';
const LABEL_21826 = 'component_21826';
export function Component21826({ value = 21826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21826, 'data-value': derived.doubled }, children);
}
export default Component21826;

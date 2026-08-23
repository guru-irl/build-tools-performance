import React from 'react';
const LABEL_12045 = 'component_12045';
export function Component12045({ value = 12045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12045, 'data-value': derived.doubled }, children);
}
export default Component12045;

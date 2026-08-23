import React from 'react';
const LABEL_21045 = 'component_21045';
export function Component21045({ value = 21045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21045, 'data-value': derived.doubled }, children);
}
export default Component21045;

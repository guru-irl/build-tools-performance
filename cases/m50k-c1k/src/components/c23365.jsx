import React from 'react';
const LABEL_23365 = 'component_23365';
export function Component23365({ value = 23365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23365, 'data-value': derived.doubled }, children);
}
export default Component23365;

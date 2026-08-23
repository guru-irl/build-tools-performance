import React from 'react';
const LABEL_17552 = 'component_17552';
export function Component17552({ value = 17552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17552, 'data-value': derived.doubled }, children);
}
export default Component17552;

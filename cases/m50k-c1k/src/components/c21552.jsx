import React from 'react';
const LABEL_21552 = 'component_21552';
export function Component21552({ value = 21552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21552, 'data-value': derived.doubled }, children);
}
export default Component21552;

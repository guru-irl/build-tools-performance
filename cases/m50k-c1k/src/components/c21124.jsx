import React from 'react';
const LABEL_21124 = 'component_21124';
export function Component21124({ value = 21124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21124, 'data-value': derived.doubled }, children);
}
export default Component21124;

import React from 'react';
const LABEL_21127 = 'component_21127';
export function Component21127({ value = 21127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21127, 'data-value': derived.doubled }, children);
}
export default Component21127;

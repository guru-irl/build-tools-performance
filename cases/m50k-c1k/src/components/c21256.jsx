import React from 'react';
const LABEL_21256 = 'component_21256';
export function Component21256({ value = 21256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21256, 'data-value': derived.doubled }, children);
}
export default Component21256;

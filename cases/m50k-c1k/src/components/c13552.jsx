import React from 'react';
const LABEL_13552 = 'component_13552';
export function Component13552({ value = 13552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13552, 'data-value': derived.doubled }, children);
}
export default Component13552;

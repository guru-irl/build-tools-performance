import React from 'react';
const LABEL_928 = 'component_928';
export function Component928({ value = 928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_928, 'data-value': derived.doubled }, children);
}
export default Component928;

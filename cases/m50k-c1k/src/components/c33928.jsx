import React from 'react';
const LABEL_33928 = 'component_33928';
export function Component33928({ value = 33928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33928, 'data-value': derived.doubled }, children);
}
export default Component33928;

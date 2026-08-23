import React from 'react';
const LABEL_21928 = 'component_21928';
export function Component21928({ value = 21928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21928, 'data-value': derived.doubled }, children);
}
export default Component21928;

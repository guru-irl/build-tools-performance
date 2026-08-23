import React from 'react';
const LABEL_33408 = 'component_33408';
export function Component33408({ value = 33408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33408, 'data-value': derived.doubled }, children);
}
export default Component33408;

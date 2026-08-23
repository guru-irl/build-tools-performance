import React from 'react';
const LABEL_33816 = 'component_33816';
export function Component33816({ value = 33816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33816, 'data-value': derived.doubled }, children);
}
export default Component33816;

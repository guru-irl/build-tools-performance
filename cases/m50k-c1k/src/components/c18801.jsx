import React from 'react';
const LABEL_18801 = 'component_18801';
export function Component18801({ value = 18801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18801, 'data-value': derived.doubled }, children);
}
export default Component18801;

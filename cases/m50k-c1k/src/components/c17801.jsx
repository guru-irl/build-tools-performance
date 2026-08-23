import React from 'react';
const LABEL_17801 = 'component_17801';
export function Component17801({ value = 17801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17801, 'data-value': derived.doubled }, children);
}
export default Component17801;

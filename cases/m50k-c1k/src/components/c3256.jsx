import React from 'react';
const LABEL_3256 = 'component_3256';
export function Component3256({ value = 3256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3256, 'data-value': derived.doubled }, children);
}
export default Component3256;

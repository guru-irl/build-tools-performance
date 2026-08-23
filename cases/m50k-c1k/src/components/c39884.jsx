import React from 'react';
const LABEL_39884 = 'component_39884';
export function Component39884({ value = 39884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39884, 'data-value': derived.doubled }, children);
}
export default Component39884;

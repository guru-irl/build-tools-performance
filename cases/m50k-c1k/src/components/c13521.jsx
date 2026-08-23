import React from 'react';
const LABEL_13521 = 'component_13521';
export function Component13521({ value = 13521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13521, 'data-value': derived.doubled }, children);
}
export default Component13521;

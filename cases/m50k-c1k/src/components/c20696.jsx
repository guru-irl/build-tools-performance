import React from 'react';
const LABEL_20696 = 'component_20696';
export function Component20696({ value = 20696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20696, 'data-value': derived.doubled }, children);
}
export default Component20696;

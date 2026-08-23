import React from 'react';
const LABEL_11504 = 'component_11504';
export function Component11504({ value = 11504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11504, 'data-value': derived.doubled }, children);
}
export default Component11504;

import React from 'react';
const LABEL_32552 = 'component_32552';
export function Component32552({ value = 32552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32552, 'data-value': derived.doubled }, children);
}
export default Component32552;

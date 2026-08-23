import React from 'react';
const LABEL_21380 = 'component_21380';
export function Component21380({ value = 21380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21380, 'data-value': derived.doubled }, children);
}
export default Component21380;

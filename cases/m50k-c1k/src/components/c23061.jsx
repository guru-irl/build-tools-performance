import React from 'react';
const LABEL_23061 = 'component_23061';
export function Component23061({ value = 23061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23061, 'data-value': derived.doubled }, children);
}
export default Component23061;

import React from 'react';
const LABEL_21464 = 'component_21464';
export function Component21464({ value = 21464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21464, 'data-value': derived.doubled }, children);
}
export default Component21464;

import React from 'react';
const LABEL_6396 = 'component_6396';
export function Component6396({ value = 6396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6396, 'data-value': derived.doubled }, children);
}
export default Component6396;

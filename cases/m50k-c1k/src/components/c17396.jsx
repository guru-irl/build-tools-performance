import React from 'react';
const LABEL_17396 = 'component_17396';
export function Component17396({ value = 17396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17396, 'data-value': derived.doubled }, children);
}
export default Component17396;

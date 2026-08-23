import React from 'react';
const LABEL_23287 = 'component_23287';
export function Component23287({ value = 23287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23287, 'data-value': derived.doubled }, children);
}
export default Component23287;

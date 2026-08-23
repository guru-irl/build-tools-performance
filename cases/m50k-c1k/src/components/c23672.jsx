import React from 'react';
const LABEL_23672 = 'component_23672';
export function Component23672({ value = 23672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23672, 'data-value': derived.doubled }, children);
}
export default Component23672;

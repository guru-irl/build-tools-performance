import React from 'react';
const LABEL_3402 = 'component_3402';
export function Component3402({ value = 3402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3402, 'data-value': derived.doubled }, children);
}
export default Component3402;

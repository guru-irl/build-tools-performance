import React from 'react';
const LABEL_11475 = 'component_11475';
export function Component11475({ value = 11475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11475, 'data-value': derived.doubled }, children);
}
export default Component11475;

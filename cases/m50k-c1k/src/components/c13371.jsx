import React from 'react';
const LABEL_13371 = 'component_13371';
export function Component13371({ value = 13371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13371, 'data-value': derived.doubled }, children);
}
export default Component13371;

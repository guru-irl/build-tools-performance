import React from 'react';
const LABEL_10371 = 'component_10371';
export function Component10371({ value = 10371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10371, 'data-value': derived.doubled }, children);
}
export default Component10371;

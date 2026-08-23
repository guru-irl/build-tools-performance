import React from 'react';
const LABEL_23012 = 'component_23012';
export function Component23012({ value = 23012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23012, 'data-value': derived.doubled }, children);
}
export default Component23012;

import React from 'react';
const LABEL_23557 = 'component_23557';
export function Component23557({ value = 23557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23557, 'data-value': derived.doubled }, children);
}
export default Component23557;

import React from 'react';
const LABEL_39557 = 'component_39557';
export function Component39557({ value = 39557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39557, 'data-value': derived.doubled }, children);
}
export default Component39557;

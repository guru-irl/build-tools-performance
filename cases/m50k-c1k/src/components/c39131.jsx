import React from 'react';
const LABEL_39131 = 'component_39131';
export function Component39131({ value = 39131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39131, 'data-value': derived.doubled }, children);
}
export default Component39131;

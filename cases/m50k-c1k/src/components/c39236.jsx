import React from 'react';
const LABEL_39236 = 'component_39236';
export function Component39236({ value = 39236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39236, 'data-value': derived.doubled }, children);
}
export default Component39236;

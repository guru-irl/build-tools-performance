import React from 'react';
const LABEL_39093 = 'component_39093';
export function Component39093({ value = 39093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39093, 'data-value': derived.doubled }, children);
}
export default Component39093;

import React from 'react';
const LABEL_39321 = 'component_39321';
export function Component39321({ value = 39321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39321, 'data-value': derived.doubled }, children);
}
export default Component39321;

import React from 'react';
const LABEL_39092 = 'component_39092';
export function Component39092({ value = 39092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39092, 'data-value': derived.doubled }, children);
}
export default Component39092;

import React from 'react';
const LABEL_39064 = 'component_39064';
export function Component39064({ value = 39064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39064, 'data-value': derived.doubled }, children);
}
export default Component39064;

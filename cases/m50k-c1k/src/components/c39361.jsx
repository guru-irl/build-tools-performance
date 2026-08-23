import React from 'react';
const LABEL_39361 = 'component_39361';
export function Component39361({ value = 39361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39361, 'data-value': derived.doubled }, children);
}
export default Component39361;

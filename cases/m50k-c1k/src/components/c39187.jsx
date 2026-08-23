import React from 'react';
const LABEL_39187 = 'component_39187';
export function Component39187({ value = 39187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39187, 'data-value': derived.doubled }, children);
}
export default Component39187;

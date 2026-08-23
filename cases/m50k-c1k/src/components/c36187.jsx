import React from 'react';
const LABEL_36187 = 'component_36187';
export function Component36187({ value = 36187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36187, 'data-value': derived.doubled }, children);
}
export default Component36187;

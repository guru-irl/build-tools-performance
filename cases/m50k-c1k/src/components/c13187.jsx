import React from 'react';
const LABEL_13187 = 'component_13187';
export function Component13187({ value = 13187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13187, 'data-value': derived.doubled }, children);
}
export default Component13187;

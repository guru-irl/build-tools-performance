import React from 'react';
const LABEL_20187 = 'component_20187';
export function Component20187({ value = 20187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20187, 'data-value': derived.doubled }, children);
}
export default Component20187;

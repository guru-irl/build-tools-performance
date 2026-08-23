import React from 'react';
const LABEL_3454 = 'component_3454';
export function Component3454({ value = 3454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3454, 'data-value': derived.doubled }, children);
}
export default Component3454;

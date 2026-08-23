import React from 'react';
const LABEL_10201 = 'component_10201';
export function Component10201({ value = 10201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10201, 'data-value': derived.doubled }, children);
}
export default Component10201;

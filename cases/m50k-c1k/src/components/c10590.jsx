import React from 'react';
const LABEL_10590 = 'component_10590';
export function Component10590({ value = 10590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10590, 'data-value': derived.doubled }, children);
}
export default Component10590;

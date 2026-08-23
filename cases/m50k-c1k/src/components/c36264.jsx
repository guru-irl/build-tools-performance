import React from 'react';
const LABEL_36264 = 'component_36264';
export function Component36264({ value = 36264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36264, 'data-value': derived.doubled }, children);
}
export default Component36264;

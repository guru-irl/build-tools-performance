import React from 'react';
const LABEL_10264 = 'component_10264';
export function Component10264({ value = 10264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10264, 'data-value': derived.doubled }, children);
}
export default Component10264;

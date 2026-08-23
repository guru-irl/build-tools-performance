import React from 'react';
const LABEL_3264 = 'component_3264';
export function Component3264({ value = 3264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3264, 'data-value': derived.doubled }, children);
}
export default Component3264;

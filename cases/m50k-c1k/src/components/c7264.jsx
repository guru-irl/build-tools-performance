import React from 'react';
const LABEL_7264 = 'component_7264';
export function Component7264({ value = 7264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7264, 'data-value': derived.doubled }, children);
}
export default Component7264;

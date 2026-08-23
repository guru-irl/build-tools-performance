import React from 'react';
const LABEL_23264 = 'component_23264';
export function Component23264({ value = 23264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23264, 'data-value': derived.doubled }, children);
}
export default Component23264;

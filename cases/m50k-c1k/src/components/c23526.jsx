import React from 'react';
const LABEL_23526 = 'component_23526';
export function Component23526({ value = 23526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23526, 'data-value': derived.doubled }, children);
}
export default Component23526;

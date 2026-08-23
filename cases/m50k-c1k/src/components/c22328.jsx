import React from 'react';
const LABEL_22328 = 'component_22328';
export function Component22328({ value = 22328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22328, 'data-value': derived.doubled }, children);
}
export default Component22328;

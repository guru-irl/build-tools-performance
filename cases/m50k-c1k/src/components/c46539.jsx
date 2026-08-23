import React from 'react';
const LABEL_46539 = 'component_46539';
export function Component46539({ value = 46539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46539, 'data-value': derived.doubled }, children);
}
export default Component46539;

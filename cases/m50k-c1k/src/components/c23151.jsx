import React from 'react';
const LABEL_23151 = 'component_23151';
export function Component23151({ value = 23151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23151, 'data-value': derived.doubled }, children);
}
export default Component23151;

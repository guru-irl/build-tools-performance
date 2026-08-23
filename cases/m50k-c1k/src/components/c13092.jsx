import React from 'react';
const LABEL_13092 = 'component_13092';
export function Component13092({ value = 13092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13092, 'data-value': derived.doubled }, children);
}
export default Component13092;

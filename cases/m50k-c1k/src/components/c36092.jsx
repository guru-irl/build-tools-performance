import React from 'react';
const LABEL_36092 = 'component_36092';
export function Component36092({ value = 36092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36092, 'data-value': derived.doubled }, children);
}
export default Component36092;

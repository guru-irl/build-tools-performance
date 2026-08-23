import React from 'react';
const LABEL_39478 = 'component_39478';
export function Component39478({ value = 39478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39478, 'data-value': derived.doubled }, children);
}
export default Component39478;

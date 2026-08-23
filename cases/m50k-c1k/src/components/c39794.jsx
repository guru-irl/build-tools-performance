import React from 'react';
const LABEL_39794 = 'component_39794';
export function Component39794({ value = 39794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39794, 'data-value': derived.doubled }, children);
}
export default Component39794;

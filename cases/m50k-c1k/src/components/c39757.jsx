import React from 'react';
const LABEL_39757 = 'component_39757';
export function Component39757({ value = 39757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39757, 'data-value': derived.doubled }, children);
}
export default Component39757;

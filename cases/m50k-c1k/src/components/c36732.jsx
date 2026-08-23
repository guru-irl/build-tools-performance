import React from 'react';
const LABEL_36732 = 'component_36732';
export function Component36732({ value = 36732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36732, 'data-value': derived.doubled }, children);
}
export default Component36732;

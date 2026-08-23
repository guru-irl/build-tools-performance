import React from 'react';
const LABEL_39732 = 'component_39732';
export function Component39732({ value = 39732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39732, 'data-value': derived.doubled }, children);
}
export default Component39732;

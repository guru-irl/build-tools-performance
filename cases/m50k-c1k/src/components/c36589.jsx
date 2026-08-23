import React from 'react';
const LABEL_36589 = 'component_36589';
export function Component36589({ value = 36589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36589, 'data-value': derived.doubled }, children);
}
export default Component36589;

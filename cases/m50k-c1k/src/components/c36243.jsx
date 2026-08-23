import React from 'react';
const LABEL_36243 = 'component_36243';
export function Component36243({ value = 36243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36243, 'data-value': derived.doubled }, children);
}
export default Component36243;

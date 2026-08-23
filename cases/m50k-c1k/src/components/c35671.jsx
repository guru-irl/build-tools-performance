import React from 'react';
const LABEL_35671 = 'component_35671';
export function Component35671({ value = 35671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35671, 'data-value': derived.doubled }, children);
}
export default Component35671;

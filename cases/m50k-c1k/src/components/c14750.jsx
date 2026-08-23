import React from 'react';
const LABEL_14750 = 'component_14750';
export function Component14750({ value = 14750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14750, 'data-value': derived.doubled }, children);
}
export default Component14750;

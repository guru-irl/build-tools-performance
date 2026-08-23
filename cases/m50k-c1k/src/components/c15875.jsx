import React from 'react';
const LABEL_15875 = 'component_15875';
export function Component15875({ value = 15875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15875, 'data-value': derived.doubled }, children);
}
export default Component15875;

import React from 'react';
const LABEL_15959 = 'component_15959';
export function Component15959({ value = 15959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15959, 'data-value': derived.doubled }, children);
}
export default Component15959;

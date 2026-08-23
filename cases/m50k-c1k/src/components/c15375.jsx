import React from 'react';
const LABEL_15375 = 'component_15375';
export function Component15375({ value = 15375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15375, 'data-value': derived.doubled }, children);
}
export default Component15375;

import React from 'react';
const LABEL_15378 = 'component_15378';
export function Component15378({ value = 15378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15378, 'data-value': derived.doubled }, children);
}
export default Component15378;

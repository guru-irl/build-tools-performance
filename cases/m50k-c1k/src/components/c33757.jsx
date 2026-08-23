import React from 'react';
const LABEL_33757 = 'component_33757';
export function Component33757({ value = 33757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33757, 'data-value': derived.doubled }, children);
}
export default Component33757;

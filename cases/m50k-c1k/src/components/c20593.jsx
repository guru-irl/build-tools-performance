import React from 'react';
const LABEL_20593 = 'component_20593';
export function Component20593({ value = 20593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20593, 'data-value': derived.doubled }, children);
}
export default Component20593;

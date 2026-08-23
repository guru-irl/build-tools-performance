import React from 'react';
const LABEL_15054 = 'component_15054';
export function Component15054({ value = 15054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15054, 'data-value': derived.doubled }, children);
}
export default Component15054;

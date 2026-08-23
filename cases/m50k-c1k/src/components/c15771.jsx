import React from 'react';
const LABEL_15771 = 'component_15771';
export function Component15771({ value = 15771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15771, 'data-value': derived.doubled }, children);
}
export default Component15771;

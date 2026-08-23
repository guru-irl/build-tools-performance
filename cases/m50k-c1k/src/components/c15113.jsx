import React from 'react';
const LABEL_15113 = 'component_15113';
export function Component15113({ value = 15113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15113, 'data-value': derived.doubled }, children);
}
export default Component15113;

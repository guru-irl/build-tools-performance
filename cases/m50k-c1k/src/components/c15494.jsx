import React from 'react';
const LABEL_15494 = 'component_15494';
export function Component15494({ value = 15494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15494, 'data-value': derived.doubled }, children);
}
export default Component15494;

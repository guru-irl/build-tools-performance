import React from 'react';
const LABEL_15497 = 'component_15497';
export function Component15497({ value = 15497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15497, 'data-value': derived.doubled }, children);
}
export default Component15497;

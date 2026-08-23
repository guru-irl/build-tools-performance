import React from 'react';
const LABEL_15803 = 'component_15803';
export function Component15803({ value = 15803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15803, 'data-value': derived.doubled }, children);
}
export default Component15803;

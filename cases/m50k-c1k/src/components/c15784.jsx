import React from 'react';
const LABEL_15784 = 'component_15784';
export function Component15784({ value = 15784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15784, 'data-value': derived.doubled }, children);
}
export default Component15784;

import React from 'react';
const LABEL_9624 = 'component_9624';
export function Component9624({ value = 9624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9624, 'data-value': derived.doubled }, children);
}
export default Component9624;

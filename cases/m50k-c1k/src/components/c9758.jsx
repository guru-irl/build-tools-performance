import React from 'react';
const LABEL_9758 = 'component_9758';
export function Component9758({ value = 9758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9758, 'data-value': derived.doubled }, children);
}
export default Component9758;

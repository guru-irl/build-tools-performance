import React from 'react';
const LABEL_9474 = 'component_9474';
export function Component9474({ value = 9474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9474, 'data-value': derived.doubled }, children);
}
export default Component9474;

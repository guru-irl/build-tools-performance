import React from 'react';
const LABEL_9815 = 'component_9815';
export function Component9815({ value = 9815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9815, 'data-value': derived.doubled }, children);
}
export default Component9815;

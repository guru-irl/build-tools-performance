import React from 'react';
const LABEL_9874 = 'component_9874';
export function Component9874({ value = 9874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9874, 'data-value': derived.doubled }, children);
}
export default Component9874;

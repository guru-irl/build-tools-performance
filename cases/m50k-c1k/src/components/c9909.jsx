import React from 'react';
const LABEL_9909 = 'component_9909';
export function Component9909({ value = 9909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9909, 'data-value': derived.doubled }, children);
}
export default Component9909;

import React from 'react';
const LABEL_9409 = 'component_9409';
export function Component9409({ value = 9409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9409, 'data-value': derived.doubled }, children);
}
export default Component9409;

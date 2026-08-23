import React from 'react';
const LABEL_9604 = 'component_9604';
export function Component9604({ value = 9604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9604, 'data-value': derived.doubled }, children);
}
export default Component9604;

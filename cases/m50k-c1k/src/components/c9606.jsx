import React from 'react';
const LABEL_9606 = 'component_9606';
export function Component9606({ value = 9606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9606, 'data-value': derived.doubled }, children);
}
export default Component9606;

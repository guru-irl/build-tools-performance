import React from 'react';
const LABEL_9653 = 'component_9653';
export function Component9653({ value = 9653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9653, 'data-value': derived.doubled }, children);
}
export default Component9653;

import React from 'react';
const LABEL_9985 = 'component_9985';
export function Component9985({ value = 9985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9985, 'data-value': derived.doubled }, children);
}
export default Component9985;

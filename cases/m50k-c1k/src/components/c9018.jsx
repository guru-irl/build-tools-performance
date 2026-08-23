import React from 'react';
const LABEL_9018 = 'component_9018';
export function Component9018({ value = 9018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9018, 'data-value': derived.doubled }, children);
}
export default Component9018;

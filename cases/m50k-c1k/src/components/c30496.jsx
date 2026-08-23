import React from 'react';
const LABEL_30496 = 'component_30496';
export function Component30496({ value = 30496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30496, 'data-value': derived.doubled }, children);
}
export default Component30496;

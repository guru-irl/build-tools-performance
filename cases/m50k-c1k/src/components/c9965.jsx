import React from 'react';
const LABEL_9965 = 'component_9965';
export function Component9965({ value = 9965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9965, 'data-value': derived.doubled }, children);
}
export default Component9965;

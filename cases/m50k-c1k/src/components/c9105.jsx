import React from 'react';
const LABEL_9105 = 'component_9105';
export function Component9105({ value = 9105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9105, 'data-value': derived.doubled }, children);
}
export default Component9105;

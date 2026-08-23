import React from 'react';
const LABEL_9076 = 'component_9076';
export function Component9076({ value = 9076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9076, 'data-value': derived.doubled }, children);
}
export default Component9076;

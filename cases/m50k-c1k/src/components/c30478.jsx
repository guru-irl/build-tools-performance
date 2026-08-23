import React from 'react';
const LABEL_30478 = 'component_30478';
export function Component30478({ value = 30478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30478, 'data-value': derived.doubled }, children);
}
export default Component30478;

import React from 'react';
const LABEL_30650 = 'component_30650';
export function Component30650({ value = 30650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30650, 'data-value': derived.doubled }, children);
}
export default Component30650;

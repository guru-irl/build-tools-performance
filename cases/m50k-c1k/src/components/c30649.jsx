import React from 'react';
const LABEL_30649 = 'component_30649';
export function Component30649({ value = 30649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30649, 'data-value': derived.doubled }, children);
}
export default Component30649;

import React from 'react';
const LABEL_30918 = 'component_30918';
export function Component30918({ value = 30918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30918, 'data-value': derived.doubled }, children);
}
export default Component30918;

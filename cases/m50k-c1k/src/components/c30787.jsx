import React from 'react';
const LABEL_30787 = 'component_30787';
export function Component30787({ value = 30787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30787, 'data-value': derived.doubled }, children);
}
export default Component30787;

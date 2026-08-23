import React from 'react';
const LABEL_35330 = 'component_35330';
export function Component35330({ value = 35330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35330, 'data-value': derived.doubled }, children);
}
export default Component35330;

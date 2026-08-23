import React from 'react';
const LABEL_5857 = 'component_5857';
export function Component5857({ value = 5857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5857, 'data-value': derived.doubled }, children);
}
export default Component5857;

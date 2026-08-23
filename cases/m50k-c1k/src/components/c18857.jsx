import React from 'react';
const LABEL_18857 = 'component_18857';
export function Component18857({ value = 18857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18857, 'data-value': derived.doubled }, children);
}
export default Component18857;

import React from 'react';
const LABEL_15857 = 'component_15857';
export function Component15857({ value = 15857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15857, 'data-value': derived.doubled }, children);
}
export default Component15857;

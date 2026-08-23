import React from 'react';
const LABEL_33857 = 'component_33857';
export function Component33857({ value = 33857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33857, 'data-value': derived.doubled }, children);
}
export default Component33857;

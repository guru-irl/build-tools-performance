import React from 'react';
const LABEL_10857 = 'component_10857';
export function Component10857({ value = 10857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10857, 'data-value': derived.doubled }, children);
}
export default Component10857;

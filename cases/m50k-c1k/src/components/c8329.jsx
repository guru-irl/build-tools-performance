import React from 'react';
const LABEL_8329 = 'component_8329';
export function Component8329({ value = 8329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8329, 'data-value': derived.doubled }, children);
}
export default Component8329;

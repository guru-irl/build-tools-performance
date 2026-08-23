import React from 'react';
const LABEL_1857 = 'component_1857';
export function Component1857({ value = 1857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1857, 'data-value': derived.doubled }, children);
}
export default Component1857;

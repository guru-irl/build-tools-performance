import React from 'react';
const LABEL_22857 = 'component_22857';
export function Component22857({ value = 22857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22857, 'data-value': derived.doubled }, children);
}
export default Component22857;

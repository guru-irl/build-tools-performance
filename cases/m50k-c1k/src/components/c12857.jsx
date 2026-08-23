import React from 'react';
const LABEL_12857 = 'component_12857';
export function Component12857({ value = 12857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12857, 'data-value': derived.doubled }, children);
}
export default Component12857;

import React from 'react';
const LABEL_12421 = 'component_12421';
export function Component12421({ value = 12421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12421, 'data-value': derived.doubled }, children);
}
export default Component12421;

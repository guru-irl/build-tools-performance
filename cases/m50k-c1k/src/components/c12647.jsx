import React from 'react';
const LABEL_12647 = 'component_12647';
export function Component12647({ value = 12647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12647, 'data-value': derived.doubled }, children);
}
export default Component12647;

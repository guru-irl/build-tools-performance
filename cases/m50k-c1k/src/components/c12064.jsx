import React from 'react';
const LABEL_12064 = 'component_12064';
export function Component12064({ value = 12064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12064, 'data-value': derived.doubled }, children);
}
export default Component12064;

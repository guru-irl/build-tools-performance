import React from 'react';
const LABEL_12371 = 'component_12371';
export function Component12371({ value = 12371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12371, 'data-value': derived.doubled }, children);
}
export default Component12371;

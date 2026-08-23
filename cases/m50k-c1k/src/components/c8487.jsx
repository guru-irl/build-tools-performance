import React from 'react';
const LABEL_8487 = 'component_8487';
export function Component8487({ value = 8487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8487, 'data-value': derived.doubled }, children);
}
export default Component8487;

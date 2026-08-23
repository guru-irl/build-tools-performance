import React from 'react';
const LABEL_8617 = 'component_8617';
export function Component8617({ value = 8617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8617, 'data-value': derived.doubled }, children);
}
export default Component8617;

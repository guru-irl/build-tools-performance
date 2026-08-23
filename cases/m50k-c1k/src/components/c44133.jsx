import React from 'react';
const LABEL_44133 = 'component_44133';
export function Component44133({ value = 44133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44133, 'data-value': derived.doubled }, children);
}
export default Component44133;

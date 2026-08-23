import React from 'react';
const LABEL_24133 = 'component_24133';
export function Component24133({ value = 24133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24133, 'data-value': derived.doubled }, children);
}
export default Component24133;

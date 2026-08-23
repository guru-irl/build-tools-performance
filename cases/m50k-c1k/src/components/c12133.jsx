import React from 'react';
const LABEL_12133 = 'component_12133';
export function Component12133({ value = 12133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12133, 'data-value': derived.doubled }, children);
}
export default Component12133;

import React from 'react';
const LABEL_8133 = 'component_8133';
export function Component8133({ value = 8133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8133, 'data-value': derived.doubled }, children);
}
export default Component8133;

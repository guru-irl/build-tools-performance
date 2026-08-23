import React from 'react';
const LABEL_8296 = 'component_8296';
export function Component8296({ value = 8296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8296, 'data-value': derived.doubled }, children);
}
export default Component8296;

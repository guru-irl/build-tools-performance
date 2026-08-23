import React from 'react';
const LABEL_1296 = 'component_1296';
export function Component1296({ value = 1296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1296, 'data-value': derived.doubled }, children);
}
export default Component1296;

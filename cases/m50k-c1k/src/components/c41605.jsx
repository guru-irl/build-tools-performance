import React from 'react';
const LABEL_41605 = 'component_41605';
export function Component41605({ value = 41605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41605, 'data-value': derived.doubled }, children);
}
export default Component41605;

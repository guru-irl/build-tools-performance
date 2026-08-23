import React from 'react';
const LABEL_44513 = 'component_44513';
export function Component44513({ value = 44513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44513, 'data-value': derived.doubled }, children);
}
export default Component44513;

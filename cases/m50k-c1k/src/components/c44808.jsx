import React from 'react';
const LABEL_44808 = 'component_44808';
export function Component44808({ value = 44808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44808, 'data-value': derived.doubled }, children);
}
export default Component44808;

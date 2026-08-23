import React from 'react';
const LABEL_44284 = 'component_44284';
export function Component44284({ value = 44284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44284, 'data-value': derived.doubled }, children);
}
export default Component44284;

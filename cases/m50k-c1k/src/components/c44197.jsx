import React from 'react';
const LABEL_44197 = 'component_44197';
export function Component44197({ value = 44197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44197, 'data-value': derived.doubled }, children);
}
export default Component44197;

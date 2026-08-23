import React from 'react';
const LABEL_40197 = 'component_40197';
export function Component40197({ value = 40197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40197, 'data-value': derived.doubled }, children);
}
export default Component40197;

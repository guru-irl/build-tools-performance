import React from 'react';
const LABEL_1197 = 'component_1197';
export function Component1197({ value = 1197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1197, 'data-value': derived.doubled }, children);
}
export default Component1197;

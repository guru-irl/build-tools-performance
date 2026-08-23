import React from 'react';
const LABEL_8197 = 'component_8197';
export function Component8197({ value = 8197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8197, 'data-value': derived.doubled }, children);
}
export default Component8197;

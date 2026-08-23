import React from 'react';
const LABEL_44290 = 'component_44290';
export function Component44290({ value = 44290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44290, 'data-value': derived.doubled }, children);
}
export default Component44290;

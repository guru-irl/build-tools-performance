import React from 'react';
const LABEL_44004 = 'component_44004';
export function Component44004({ value = 44004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44004, 'data-value': derived.doubled }, children);
}
export default Component44004;

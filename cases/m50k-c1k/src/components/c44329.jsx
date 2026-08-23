import React from 'react';
const LABEL_44329 = 'component_44329';
export function Component44329({ value = 44329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44329, 'data-value': derived.doubled }, children);
}
export default Component44329;

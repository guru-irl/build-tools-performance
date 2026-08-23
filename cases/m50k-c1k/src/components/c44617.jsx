import React from 'react';
const LABEL_44617 = 'component_44617';
export function Component44617({ value = 44617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44617, 'data-value': derived.doubled }, children);
}
export default Component44617;

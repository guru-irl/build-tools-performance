import React from 'react';
const LABEL_44590 = 'component_44590';
export function Component44590({ value = 44590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44590, 'data-value': derived.doubled }, children);
}
export default Component44590;

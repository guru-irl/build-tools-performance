import React from 'react';
const LABEL_44661 = 'component_44661';
export function Component44661({ value = 44661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44661, 'data-value': derived.doubled }, children);
}
export default Component44661;

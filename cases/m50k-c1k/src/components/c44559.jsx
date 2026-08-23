import React from 'react';
const LABEL_44559 = 'component_44559';
export function Component44559({ value = 44559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44559, 'data-value': derived.doubled }, children);
}
export default Component44559;

import React from 'react';
const LABEL_11255 = 'component_11255';
export function Component11255({ value = 11255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11255, 'data-value': derived.doubled }, children);
}
export default Component11255;

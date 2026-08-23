import React from 'react';
const LABEL_44292 = 'component_44292';
export function Component44292({ value = 44292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44292, 'data-value': derived.doubled }, children);
}
export default Component44292;

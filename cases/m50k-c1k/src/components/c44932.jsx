import React from 'react';
const LABEL_44932 = 'component_44932';
export function Component44932({ value = 44932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44932, 'data-value': derived.doubled }, children);
}
export default Component44932;

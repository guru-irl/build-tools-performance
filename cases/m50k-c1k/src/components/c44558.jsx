import React from 'react';
const LABEL_44558 = 'component_44558';
export function Component44558({ value = 44558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44558, 'data-value': derived.doubled }, children);
}
export default Component44558;

import React from 'react';
const LABEL_28154 = 'component_28154';
export function Component28154({ value = 28154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28154, 'data-value': derived.doubled }, children);
}
export default Component28154;

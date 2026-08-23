import React from 'react';
const LABEL_44859 = 'component_44859';
export function Component44859({ value = 44859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44859, 'data-value': derived.doubled }, children);
}
export default Component44859;

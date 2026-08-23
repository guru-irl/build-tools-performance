import React from 'react';
const LABEL_3800 = 'component_3800';
export function Component3800({ value = 3800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3800, 'data-value': derived.doubled }, children);
}
export default Component3800;

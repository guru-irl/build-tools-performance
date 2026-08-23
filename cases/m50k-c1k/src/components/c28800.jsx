import React from 'react';
const LABEL_28800 = 'component_28800';
export function Component28800({ value = 28800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28800, 'data-value': derived.doubled }, children);
}
export default Component28800;

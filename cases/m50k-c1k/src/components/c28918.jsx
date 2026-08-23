import React from 'react';
const LABEL_28918 = 'component_28918';
export function Component28918({ value = 28918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28918, 'data-value': derived.doubled }, children);
}
export default Component28918;

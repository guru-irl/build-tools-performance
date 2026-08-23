import React from 'react';
const LABEL_11809 = 'component_11809';
export function Component11809({ value = 11809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11809, 'data-value': derived.doubled }, children);
}
export default Component11809;

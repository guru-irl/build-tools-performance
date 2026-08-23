import React from 'react';
const LABEL_42639 = 'component_42639';
export function Component42639({ value = 42639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42639, 'data-value': derived.doubled }, children);
}
export default Component42639;

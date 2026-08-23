import React from 'react';
const LABEL_22639 = 'component_22639';
export function Component22639({ value = 22639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22639, 'data-value': derived.doubled }, children);
}
export default Component22639;

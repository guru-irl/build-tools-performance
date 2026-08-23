import React from 'react';
const LABEL_3639 = 'component_3639';
export function Component3639({ value = 3639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3639, 'data-value': derived.doubled }, children);
}
export default Component3639;

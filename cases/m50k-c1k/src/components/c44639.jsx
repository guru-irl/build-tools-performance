import React from 'react';
const LABEL_44639 = 'component_44639';
export function Component44639({ value = 44639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44639, 'data-value': derived.doubled }, children);
}
export default Component44639;

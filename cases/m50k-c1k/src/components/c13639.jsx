import React from 'react';
const LABEL_13639 = 'component_13639';
export function Component13639({ value = 13639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13639, 'data-value': derived.doubled }, children);
}
export default Component13639;

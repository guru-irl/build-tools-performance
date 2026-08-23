import React from 'react';
const LABEL_39639 = 'component_39639';
export function Component39639({ value = 39639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39639, 'data-value': derived.doubled }, children);
}
export default Component39639;

import React from 'react';
const LABEL_10639 = 'component_10639';
export function Component10639({ value = 10639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10639, 'data-value': derived.doubled }, children);
}
export default Component10639;

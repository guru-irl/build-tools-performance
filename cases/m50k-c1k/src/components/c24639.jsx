import React from 'react';
const LABEL_24639 = 'component_24639';
export function Component24639({ value = 24639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24639, 'data-value': derived.doubled }, children);
}
export default Component24639;

import React from 'react';
const LABEL_16639 = 'component_16639';
export function Component16639({ value = 16639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16639, 'data-value': derived.doubled }, children);
}
export default Component16639;

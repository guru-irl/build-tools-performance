import React from 'react';
const LABEL_35955 = 'component_35955';
export function Component35955({ value = 35955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35955, 'data-value': derived.doubled }, children);
}
export default Component35955;

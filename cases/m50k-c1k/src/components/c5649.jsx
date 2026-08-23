import React from 'react';
const LABEL_5649 = 'component_5649';
export function Component5649({ value = 5649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5649, 'data-value': derived.doubled }, children);
}
export default Component5649;

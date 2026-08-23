import React from 'react';
const LABEL_12222 = 'component_12222';
export function Component12222({ value = 12222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12222, 'data-value': derived.doubled }, children);
}
export default Component12222;

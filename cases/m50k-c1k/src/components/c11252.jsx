import React from 'react';
const LABEL_11252 = 'component_11252';
export function Component11252({ value = 11252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11252, 'data-value': derived.doubled }, children);
}
export default Component11252;

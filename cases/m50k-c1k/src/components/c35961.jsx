import React from 'react';
const LABEL_35961 = 'component_35961';
export function Component35961({ value = 35961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35961, 'data-value': derived.doubled }, children);
}
export default Component35961;

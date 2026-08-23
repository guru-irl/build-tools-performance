import React from 'react';
const LABEL_24961 = 'component_24961';
export function Component24961({ value = 24961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24961, 'data-value': derived.doubled }, children);
}
export default Component24961;

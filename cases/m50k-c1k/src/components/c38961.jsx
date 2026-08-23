import React from 'react';
const LABEL_38961 = 'component_38961';
export function Component38961({ value = 38961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38961, 'data-value': derived.doubled }, children);
}
export default Component38961;

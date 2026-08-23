import React from 'react';
const LABEL_32961 = 'component_32961';
export function Component32961({ value = 32961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32961, 'data-value': derived.doubled }, children);
}
export default Component32961;

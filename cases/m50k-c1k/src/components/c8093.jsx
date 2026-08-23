import React from 'react';
const LABEL_8093 = 'component_8093';
export function Component8093({ value = 8093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8093, 'data-value': derived.doubled }, children);
}
export default Component8093;

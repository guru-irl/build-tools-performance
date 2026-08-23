import React from 'react';
const LABEL_38861 = 'component_38861';
export function Component38861({ value = 38861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38861, 'data-value': derived.doubled }, children);
}
export default Component38861;

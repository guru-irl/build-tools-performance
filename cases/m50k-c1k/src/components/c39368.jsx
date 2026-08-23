import React from 'react';
const LABEL_39368 = 'component_39368';
export function Component39368({ value = 39368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39368, 'data-value': derived.doubled }, children);
}
export default Component39368;

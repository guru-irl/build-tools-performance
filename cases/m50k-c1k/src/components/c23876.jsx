import React from 'react';
const LABEL_23876 = 'component_23876';
export function Component23876({ value = 23876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23876, 'data-value': derived.doubled }, children);
}
export default Component23876;

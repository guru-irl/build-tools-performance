import React from 'react';
const LABEL_25122 = 'component_25122';
export function Component25122({ value = 25122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25122, 'data-value': derived.doubled }, children);
}
export default Component25122;

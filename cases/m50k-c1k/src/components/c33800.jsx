import React from 'react';
const LABEL_33800 = 'component_33800';
export function Component33800({ value = 33800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33800, 'data-value': derived.doubled }, children);
}
export default Component33800;

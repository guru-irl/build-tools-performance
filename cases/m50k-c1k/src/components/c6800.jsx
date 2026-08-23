import React from 'react';
const LABEL_6800 = 'component_6800';
export function Component6800({ value = 6800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6800, 'data-value': derived.doubled }, children);
}
export default Component6800;

import React from 'react';
const LABEL_10800 = 'component_10800';
export function Component10800({ value = 10800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10800, 'data-value': derived.doubled }, children);
}
export default Component10800;

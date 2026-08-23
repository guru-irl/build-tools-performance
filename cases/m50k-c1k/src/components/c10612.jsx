import React from 'react';
const LABEL_10612 = 'component_10612';
export function Component10612({ value = 10612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10612, 'data-value': derived.doubled }, children);
}
export default Component10612;

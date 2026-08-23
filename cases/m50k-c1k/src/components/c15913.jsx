import React from 'react';
const LABEL_15913 = 'component_15913';
export function Component15913({ value = 15913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15913, 'data-value': derived.doubled }, children);
}
export default Component15913;

import React from 'react';
const LABEL_32824 = 'component_32824';
export function Component32824({ value = 32824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32824, 'data-value': derived.doubled }, children);
}
export default Component32824;

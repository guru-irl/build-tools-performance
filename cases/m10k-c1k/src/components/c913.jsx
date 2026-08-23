import React from 'react';
const LABEL_913 = 'component_913';
export function Component913({ value = 913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_913, 'data-value': derived.doubled }, children);
}
export default Component913;

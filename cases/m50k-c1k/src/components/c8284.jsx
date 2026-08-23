import React from 'react';
const LABEL_8284 = 'component_8284';
export function Component8284({ value = 8284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8284, 'data-value': derived.doubled }, children);
}
export default Component8284;

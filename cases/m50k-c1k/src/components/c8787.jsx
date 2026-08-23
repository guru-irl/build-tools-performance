import React from 'react';
const LABEL_8787 = 'component_8787';
export function Component8787({ value = 8787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8787, 'data-value': derived.doubled }, children);
}
export default Component8787;

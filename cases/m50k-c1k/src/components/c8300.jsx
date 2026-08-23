import React from 'react';
const LABEL_8300 = 'component_8300';
export function Component8300({ value = 8300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8300, 'data-value': derived.doubled }, children);
}
export default Component8300;

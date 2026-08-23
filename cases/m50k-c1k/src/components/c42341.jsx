import React from 'react';
const LABEL_42341 = 'component_42341';
export function Component42341({ value = 42341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42341, 'data-value': derived.doubled }, children);
}
export default Component42341;

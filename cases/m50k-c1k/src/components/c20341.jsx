import React from 'react';
const LABEL_20341 = 'component_20341';
export function Component20341({ value = 20341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20341, 'data-value': derived.doubled }, children);
}
export default Component20341;

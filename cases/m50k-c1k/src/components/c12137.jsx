import React from 'react';
const LABEL_12137 = 'component_12137';
export function Component12137({ value = 12137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12137, 'data-value': derived.doubled }, children);
}
export default Component12137;

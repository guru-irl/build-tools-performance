import React from 'react';
const LABEL_41376 = 'component_41376';
export function Component41376({ value = 41376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41376, 'data-value': derived.doubled }, children);
}
export default Component41376;

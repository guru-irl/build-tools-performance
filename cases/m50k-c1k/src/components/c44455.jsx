import React from 'react';
const LABEL_44455 = 'component_44455';
export function Component44455({ value = 44455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44455, 'data-value': derived.doubled }, children);
}
export default Component44455;

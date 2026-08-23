import React from 'react';
const LABEL_44683 = 'component_44683';
export function Component44683({ value = 44683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44683, 'data-value': derived.doubled }, children);
}
export default Component44683;

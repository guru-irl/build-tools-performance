import React from 'react';
const LABEL_44545 = 'component_44545';
export function Component44545({ value = 44545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44545, 'data-value': derived.doubled }, children);
}
export default Component44545;

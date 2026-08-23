import React from 'react';
const LABEL_44193 = 'component_44193';
export function Component44193({ value = 44193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44193, 'data-value': derived.doubled }, children);
}
export default Component44193;

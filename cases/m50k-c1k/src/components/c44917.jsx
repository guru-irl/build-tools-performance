import React from 'react';
const LABEL_44917 = 'component_44917';
export function Component44917({ value = 44917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44917, 'data-value': derived.doubled }, children);
}
export default Component44917;

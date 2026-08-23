import React from 'react';
const LABEL_44732 = 'component_44732';
export function Component44732({ value = 44732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44732, 'data-value': derived.doubled }, children);
}
export default Component44732;

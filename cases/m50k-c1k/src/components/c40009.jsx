import React from 'react';
const LABEL_40009 = 'component_40009';
export function Component40009({ value = 40009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40009, 'data-value': derived.doubled }, children);
}
export default Component40009;

import React from 'react';
const LABEL_40990 = 'component_40990';
export function Component40990({ value = 40990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40990, 'data-value': derived.doubled }, children);
}
export default Component40990;

import React from 'react';
const LABEL_37483 = 'component_37483';
export function Component37483({ value = 37483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37483, 'data-value': derived.doubled }, children);
}
export default Component37483;

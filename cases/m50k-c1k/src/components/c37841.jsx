import React from 'react';
const LABEL_37841 = 'component_37841';
export function Component37841({ value = 37841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37841, 'data-value': derived.doubled }, children);
}
export default Component37841;

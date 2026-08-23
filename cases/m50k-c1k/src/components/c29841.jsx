import React from 'react';
const LABEL_29841 = 'component_29841';
export function Component29841({ value = 29841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29841, 'data-value': derived.doubled }, children);
}
export default Component29841;

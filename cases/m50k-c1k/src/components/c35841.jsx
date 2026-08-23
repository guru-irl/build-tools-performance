import React from 'react';
const LABEL_35841 = 'component_35841';
export function Component35841({ value = 35841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35841, 'data-value': derived.doubled }, children);
}
export default Component35841;

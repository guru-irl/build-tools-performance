import React from 'react';
const LABEL_11841 = 'component_11841';
export function Component11841({ value = 11841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11841, 'data-value': derived.doubled }, children);
}
export default Component11841;

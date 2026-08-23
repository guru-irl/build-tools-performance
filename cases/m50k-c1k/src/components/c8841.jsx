import React from 'react';
const LABEL_8841 = 'component_8841';
export function Component8841({ value = 8841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8841, 'data-value': derived.doubled }, children);
}
export default Component8841;

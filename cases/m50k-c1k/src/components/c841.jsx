import React from 'react';
const LABEL_841 = 'component_841';
export function Component841({ value = 841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_841, 'data-value': derived.doubled }, children);
}
export default Component841;

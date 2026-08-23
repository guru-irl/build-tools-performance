import React from 'react';
const LABEL_5841 = 'component_5841';
export function Component5841({ value = 5841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5841, 'data-value': derived.doubled }, children);
}
export default Component5841;

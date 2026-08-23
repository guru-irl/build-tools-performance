import React from 'react';
const LABEL_31841 = 'component_31841';
export function Component31841({ value = 31841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31841, 'data-value': derived.doubled }, children);
}
export default Component31841;

import React from 'react';
const LABEL_36841 = 'component_36841';
export function Component36841({ value = 36841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36841, 'data-value': derived.doubled }, children);
}
export default Component36841;

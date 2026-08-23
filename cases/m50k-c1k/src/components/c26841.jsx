import React from 'react';
const LABEL_26841 = 'component_26841';
export function Component26841({ value = 26841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26841, 'data-value': derived.doubled }, children);
}
export default Component26841;

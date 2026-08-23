import React from 'react';
const LABEL_39841 = 'component_39841';
export function Component39841({ value = 39841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39841, 'data-value': derived.doubled }, children);
}
export default Component39841;

import React from 'react';
const LABEL_33291 = 'component_33291';
export function Component33291({ value = 33291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33291, 'data-value': derived.doubled }, children);
}
export default Component33291;

import React from 'react';
const LABEL_33890 = 'component_33890';
export function Component33890({ value = 33890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33890, 'data-value': derived.doubled }, children);
}
export default Component33890;

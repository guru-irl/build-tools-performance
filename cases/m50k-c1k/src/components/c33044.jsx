import React from 'react';
const LABEL_33044 = 'component_33044';
export function Component33044({ value = 33044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33044, 'data-value': derived.doubled }, children);
}
export default Component33044;

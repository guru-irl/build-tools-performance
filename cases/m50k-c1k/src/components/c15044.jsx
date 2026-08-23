import React from 'react';
const LABEL_15044 = 'component_15044';
export function Component15044({ value = 15044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15044, 'data-value': derived.doubled }, children);
}
export default Component15044;

import React from 'react';
const LABEL_15070 = 'component_15070';
export function Component15070({ value = 15070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15070, 'data-value': derived.doubled }, children);
}
export default Component15070;

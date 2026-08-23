import React from 'react';
const LABEL_15250 = 'component_15250';
export function Component15250({ value = 15250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15250, 'data-value': derived.doubled }, children);
}
export default Component15250;

import React from 'react';
const LABEL_15199 = 'component_15199';
export function Component15199({ value = 15199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15199, 'data-value': derived.doubled }, children);
}
export default Component15199;

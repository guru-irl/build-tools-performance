import React from 'react';
const LABEL_33145 = 'component_33145';
export function Component33145({ value = 33145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33145, 'data-value': derived.doubled }, children);
}
export default Component33145;

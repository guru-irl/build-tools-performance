import React from 'react';
const LABEL_25145 = 'component_25145';
export function Component25145({ value = 25145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25145, 'data-value': derived.doubled }, children);
}
export default Component25145;

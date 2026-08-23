import React from 'react';
const LABEL_18145 = 'component_18145';
export function Component18145({ value = 18145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18145, 'data-value': derived.doubled }, children);
}
export default Component18145;

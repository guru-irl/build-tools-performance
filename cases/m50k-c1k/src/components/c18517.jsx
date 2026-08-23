import React from 'react';
const LABEL_18517 = 'component_18517';
export function Component18517({ value = 18517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18517, 'data-value': derived.doubled }, children);
}
export default Component18517;

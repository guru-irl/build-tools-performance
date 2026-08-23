import React from 'react';
const LABEL_34947 = 'component_34947';
export function Component34947({ value = 34947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34947, 'data-value': derived.doubled }, children);
}
export default Component34947;

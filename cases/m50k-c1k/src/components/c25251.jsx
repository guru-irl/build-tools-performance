import React from 'react';
const LABEL_25251 = 'component_25251';
export function Component25251({ value = 25251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25251, 'data-value': derived.doubled }, children);
}
export default Component25251;

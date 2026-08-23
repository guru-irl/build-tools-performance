import React from 'react';
const LABEL_6495 = 'component_6495';
export function Component6495({ value = 6495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6495, 'data-value': derived.doubled }, children);
}
export default Component6495;

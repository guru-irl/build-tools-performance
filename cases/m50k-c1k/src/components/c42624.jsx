import React from 'react';
const LABEL_42624 = 'component_42624';
export function Component42624({ value = 42624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42624, 'data-value': derived.doubled }, children);
}
export default Component42624;

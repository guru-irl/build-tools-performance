import React from 'react';
const LABEL_39178 = 'component_39178';
export function Component39178({ value = 39178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39178, 'data-value': derived.doubled }, children);
}
export default Component39178;

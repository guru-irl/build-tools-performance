import React from 'react';
const LABEL_10178 = 'component_10178';
export function Component10178({ value = 10178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10178, 'data-value': derived.doubled }, children);
}
export default Component10178;

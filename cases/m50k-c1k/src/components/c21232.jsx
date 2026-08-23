import React from 'react';
const LABEL_21232 = 'component_21232';
export function Component21232({ value = 21232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21232, 'data-value': derived.doubled }, children);
}
export default Component21232;

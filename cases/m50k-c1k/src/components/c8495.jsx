import React from 'react';
const LABEL_8495 = 'component_8495';
export function Component8495({ value = 8495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8495, 'data-value': derived.doubled }, children);
}
export default Component8495;

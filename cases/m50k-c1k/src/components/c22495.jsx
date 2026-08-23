import React from 'react';
const LABEL_22495 = 'component_22495';
export function Component22495({ value = 22495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22495, 'data-value': derived.doubled }, children);
}
export default Component22495;

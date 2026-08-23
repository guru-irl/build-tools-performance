import React from 'react';
const LABEL_21707 = 'component_21707';
export function Component21707({ value = 21707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21707, 'data-value': derived.doubled }, children);
}
export default Component21707;

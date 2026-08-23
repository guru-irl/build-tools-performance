import React from 'react';
const LABEL_2707 = 'component_2707';
export function Component2707({ value = 2707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2707, 'data-value': derived.doubled }, children);
}
export default Component2707;

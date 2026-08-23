import React from 'react';
const LABEL_1707 = 'component_1707';
export function Component1707({ value = 1707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1707, 'data-value': derived.doubled }, children);
}
export default Component1707;

import React from 'react';
const LABEL_13707 = 'component_13707';
export function Component13707({ value = 13707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13707, 'data-value': derived.doubled }, children);
}
export default Component13707;

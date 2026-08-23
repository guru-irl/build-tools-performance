import React from 'react';
const LABEL_29426 = 'component_29426';
export function Component29426({ value = 29426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29426, 'data-value': derived.doubled }, children);
}
export default Component29426;

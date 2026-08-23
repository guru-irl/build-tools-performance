import React from 'react';
const LABEL_29104 = 'component_29104';
export function Component29104({ value = 29104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29104, 'data-value': derived.doubled }, children);
}
export default Component29104;

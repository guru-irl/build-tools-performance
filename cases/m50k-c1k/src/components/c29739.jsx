import React from 'react';
const LABEL_29739 = 'component_29739';
export function Component29739({ value = 29739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29739, 'data-value': derived.doubled }, children);
}
export default Component29739;

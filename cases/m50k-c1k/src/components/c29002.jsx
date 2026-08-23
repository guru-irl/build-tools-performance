import React from 'react';
const LABEL_29002 = 'component_29002';
export function Component29002({ value = 29002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29002, 'data-value': derived.doubled }, children);
}
export default Component29002;

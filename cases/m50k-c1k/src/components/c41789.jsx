import React from 'react';
const LABEL_41789 = 'component_41789';
export function Component41789({ value = 41789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41789, 'data-value': derived.doubled }, children);
}
export default Component41789;

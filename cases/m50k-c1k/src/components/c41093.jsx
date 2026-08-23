import React from 'react';
const LABEL_41093 = 'component_41093';
export function Component41093({ value = 41093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41093, 'data-value': derived.doubled }, children);
}
export default Component41093;

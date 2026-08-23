import React from 'react';
const LABEL_41967 = 'component_41967';
export function Component41967({ value = 41967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41967, 'data-value': derived.doubled }, children);
}
export default Component41967;

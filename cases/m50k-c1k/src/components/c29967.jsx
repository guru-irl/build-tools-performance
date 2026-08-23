import React from 'react';
const LABEL_29967 = 'component_29967';
export function Component29967({ value = 29967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29967, 'data-value': derived.doubled }, children);
}
export default Component29967;

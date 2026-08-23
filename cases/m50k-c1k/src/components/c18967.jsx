import React from 'react';
const LABEL_18967 = 'component_18967';
export function Component18967({ value = 18967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18967, 'data-value': derived.doubled }, children);
}
export default Component18967;

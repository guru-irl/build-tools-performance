import React from 'react';
const LABEL_35967 = 'component_35967';
export function Component35967({ value = 35967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35967, 'data-value': derived.doubled }, children);
}
export default Component35967;

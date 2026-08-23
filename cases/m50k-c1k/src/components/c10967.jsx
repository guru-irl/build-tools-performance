import React from 'react';
const LABEL_10967 = 'component_10967';
export function Component10967({ value = 10967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10967, 'data-value': derived.doubled }, children);
}
export default Component10967;

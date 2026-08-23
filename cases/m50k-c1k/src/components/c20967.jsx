import React from 'react';
const LABEL_20967 = 'component_20967';
export function Component20967({ value = 20967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20967, 'data-value': derived.doubled }, children);
}
export default Component20967;

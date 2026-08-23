import React from 'react';
const LABEL_8105 = 'component_8105';
export function Component8105({ value = 8105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8105, 'data-value': derived.doubled }, children);
}
export default Component8105;

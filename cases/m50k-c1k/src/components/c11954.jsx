import React from 'react';
const LABEL_11954 = 'component_11954';
export function Component11954({ value = 11954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11954, 'data-value': derived.doubled }, children);
}
export default Component11954;

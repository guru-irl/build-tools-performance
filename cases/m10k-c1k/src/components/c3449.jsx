import React from 'react';
const LABEL_3449 = 'component_3449';
export function Component3449({ value = 3449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3449, 'data-value': derived.doubled }, children);
}
export default Component3449;

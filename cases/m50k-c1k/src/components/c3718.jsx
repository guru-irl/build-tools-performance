import React from 'react';
const LABEL_3718 = 'component_3718';
export function Component3718({ value = 3718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3718, 'data-value': derived.doubled }, children);
}
export default Component3718;

import React from 'react';
const LABEL_3871 = 'component_3871';
export function Component3871({ value = 3871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3871, 'data-value': derived.doubled }, children);
}
export default Component3871;

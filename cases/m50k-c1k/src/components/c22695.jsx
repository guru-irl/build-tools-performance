import React from 'react';
const LABEL_22695 = 'component_22695';
export function Component22695({ value = 22695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22695, 'data-value': derived.doubled }, children);
}
export default Component22695;

import React from 'react';
const LABEL_3539 = 'component_3539';
export function Component3539({ value = 3539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3539, 'data-value': derived.doubled }, children);
}
export default Component3539;

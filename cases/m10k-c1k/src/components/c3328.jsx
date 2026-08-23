import React from 'react';
const LABEL_3328 = 'component_3328';
export function Component3328({ value = 3328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3328, 'data-value': derived.doubled }, children);
}
export default Component3328;

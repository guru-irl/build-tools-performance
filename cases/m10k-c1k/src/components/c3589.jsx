import React from 'react';
const LABEL_3589 = 'component_3589';
export function Component3589({ value = 3589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3589, 'data-value': derived.doubled }, children);
}
export default Component3589;

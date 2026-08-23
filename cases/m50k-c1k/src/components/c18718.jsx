import React from 'react';
const LABEL_18718 = 'component_18718';
export function Component18718({ value = 18718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18718, 'data-value': derived.doubled }, children);
}
export default Component18718;

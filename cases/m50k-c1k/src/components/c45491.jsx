import React from 'react';
const LABEL_45491 = 'component_45491';
export function Component45491({ value = 45491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45491, 'data-value': derived.doubled }, children);
}
export default Component45491;

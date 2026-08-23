import React from 'react';
const LABEL_45658 = 'component_45658';
export function Component45658({ value = 45658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45658, 'data-value': derived.doubled }, children);
}
export default Component45658;

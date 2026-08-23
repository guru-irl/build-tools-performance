import React from 'react';
const LABEL_3658 = 'component_3658';
export function Component3658({ value = 3658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3658, 'data-value': derived.doubled }, children);
}
export default Component3658;

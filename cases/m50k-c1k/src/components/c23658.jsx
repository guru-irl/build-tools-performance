import React from 'react';
const LABEL_23658 = 'component_23658';
export function Component23658({ value = 23658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23658, 'data-value': derived.doubled }, children);
}
export default Component23658;

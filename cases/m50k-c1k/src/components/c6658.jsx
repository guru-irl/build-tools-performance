import React from 'react';
const LABEL_6658 = 'component_6658';
export function Component6658({ value = 6658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6658, 'data-value': derived.doubled }, children);
}
export default Component6658;

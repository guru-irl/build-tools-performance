import React from 'react';
const LABEL_8658 = 'component_8658';
export function Component8658({ value = 8658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8658, 'data-value': derived.doubled }, children);
}
export default Component8658;

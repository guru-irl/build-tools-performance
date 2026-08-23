import React from 'react';
const LABEL_34658 = 'component_34658';
export function Component34658({ value = 34658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34658, 'data-value': derived.doubled }, children);
}
export default Component34658;

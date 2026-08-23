import React from 'react';
const LABEL_19658 = 'component_19658';
export function Component19658({ value = 19658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19658, 'data-value': derived.doubled }, children);
}
export default Component19658;

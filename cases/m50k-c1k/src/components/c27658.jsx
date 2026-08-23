import React from 'react';
const LABEL_27658 = 'component_27658';
export function Component27658({ value = 27658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27658, 'data-value': derived.doubled }, children);
}
export default Component27658;

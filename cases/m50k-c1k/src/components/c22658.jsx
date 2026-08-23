import React from 'react';
const LABEL_22658 = 'component_22658';
export function Component22658({ value = 22658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22658, 'data-value': derived.doubled }, children);
}
export default Component22658;

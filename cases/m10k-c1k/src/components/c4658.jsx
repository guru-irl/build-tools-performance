import React from 'react';
const LABEL_4658 = 'component_4658';
export function Component4658({ value = 4658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4658, 'data-value': derived.doubled }, children);
}
export default Component4658;

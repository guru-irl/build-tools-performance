import React from 'react';
const LABEL_13658 = 'component_13658';
export function Component13658({ value = 13658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13658, 'data-value': derived.doubled }, children);
}
export default Component13658;

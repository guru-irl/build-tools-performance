import React from 'react';
const LABEL_36658 = 'component_36658';
export function Component36658({ value = 36658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36658, 'data-value': derived.doubled }, children);
}
export default Component36658;

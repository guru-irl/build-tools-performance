import React from 'react';
const LABEL_35658 = 'component_35658';
export function Component35658({ value = 35658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35658, 'data-value': derived.doubled }, children);
}
export default Component35658;

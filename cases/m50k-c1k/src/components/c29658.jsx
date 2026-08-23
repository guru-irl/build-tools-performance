import React from 'react';
const LABEL_29658 = 'component_29658';
export function Component29658({ value = 29658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29658, 'data-value': derived.doubled }, children);
}
export default Component29658;

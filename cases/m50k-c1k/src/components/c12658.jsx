import React from 'react';
const LABEL_12658 = 'component_12658';
export function Component12658({ value = 12658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12658, 'data-value': derived.doubled }, children);
}
export default Component12658;

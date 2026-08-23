import React from 'react';
const LABEL_42658 = 'component_42658';
export function Component42658({ value = 42658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42658, 'data-value': derived.doubled }, children);
}
export default Component42658;

import React from 'react';
const LABEL_41658 = 'component_41658';
export function Component41658({ value = 41658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41658, 'data-value': derived.doubled }, children);
}
export default Component41658;

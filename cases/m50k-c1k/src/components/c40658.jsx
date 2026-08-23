import React from 'react';
const LABEL_40658 = 'component_40658';
export function Component40658({ value = 40658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40658, 'data-value': derived.doubled }, children);
}
export default Component40658;

import React from 'react';
const LABEL_26658 = 'component_26658';
export function Component26658({ value = 26658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26658, 'data-value': derived.doubled }, children);
}
export default Component26658;

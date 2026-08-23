import React from 'react';
const LABEL_25658 = 'component_25658';
export function Component25658({ value = 25658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25658, 'data-value': derived.doubled }, children);
}
export default Component25658;

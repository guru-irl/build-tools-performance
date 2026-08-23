import React from 'react';
const LABEL_38658 = 'component_38658';
export function Component38658({ value = 38658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38658, 'data-value': derived.doubled }, children);
}
export default Component38658;

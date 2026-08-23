import React from 'react';
const LABEL_18829 = 'component_18829';
export function Component18829({ value = 18829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18829, 'data-value': derived.doubled }, children);
}
export default Component18829;

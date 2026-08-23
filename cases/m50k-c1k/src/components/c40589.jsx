import React from 'react';
const LABEL_40589 = 'component_40589';
export function Component40589({ value = 40589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40589, 'data-value': derived.doubled }, children);
}
export default Component40589;

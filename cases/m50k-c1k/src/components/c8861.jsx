import React from 'react';
const LABEL_8861 = 'component_8861';
export function Component8861({ value = 8861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8861, 'data-value': derived.doubled }, children);
}
export default Component8861;

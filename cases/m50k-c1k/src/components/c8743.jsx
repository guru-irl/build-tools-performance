import React from 'react';
const LABEL_8743 = 'component_8743';
export function Component8743({ value = 8743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8743, 'data-value': derived.doubled }, children);
}
export default Component8743;

import React from 'react';
const LABEL_8709 = 'component_8709';
export function Component8709({ value = 8709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8709, 'data-value': derived.doubled }, children);
}
export default Component8709;

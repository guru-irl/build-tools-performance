import React from 'react';
const LABEL_8272 = 'component_8272';
export function Component8272({ value = 8272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8272, 'data-value': derived.doubled }, children);
}
export default Component8272;

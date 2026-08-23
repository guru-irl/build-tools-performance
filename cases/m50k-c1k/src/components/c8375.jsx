import React from 'react';
const LABEL_8375 = 'component_8375';
export function Component8375({ value = 8375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8375, 'data-value': derived.doubled }, children);
}
export default Component8375;

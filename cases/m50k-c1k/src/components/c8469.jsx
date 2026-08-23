import React from 'react';
const LABEL_8469 = 'component_8469';
export function Component8469({ value = 8469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8469, 'data-value': derived.doubled }, children);
}
export default Component8469;

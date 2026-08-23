import React from 'react';
const LABEL_8642 = 'component_8642';
export function Component8642({ value = 8642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8642, 'data-value': derived.doubled }, children);
}
export default Component8642;

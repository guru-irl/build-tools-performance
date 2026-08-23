import React from 'react';
const LABEL_8376 = 'component_8376';
export function Component8376({ value = 8376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8376, 'data-value': derived.doubled }, children);
}
export default Component8376;

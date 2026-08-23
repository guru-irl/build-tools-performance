import React from 'react';
const LABEL_43376 = 'component_43376';
export function Component43376({ value = 43376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43376, 'data-value': derived.doubled }, children);
}
export default Component43376;

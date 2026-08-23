import React from 'react';
const LABEL_22376 = 'component_22376';
export function Component22376({ value = 22376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22376, 'data-value': derived.doubled }, children);
}
export default Component22376;

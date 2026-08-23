import React from 'react';
const LABEL_35376 = 'component_35376';
export function Component35376({ value = 35376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35376, 'data-value': derived.doubled }, children);
}
export default Component35376;

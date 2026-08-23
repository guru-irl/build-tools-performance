import React from 'react';
const LABEL_38376 = 'component_38376';
export function Component38376({ value = 38376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38376, 'data-value': derived.doubled }, children);
}
export default Component38376;

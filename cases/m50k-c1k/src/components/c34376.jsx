import React from 'react';
const LABEL_34376 = 'component_34376';
export function Component34376({ value = 34376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34376, 'data-value': derived.doubled }, children);
}
export default Component34376;

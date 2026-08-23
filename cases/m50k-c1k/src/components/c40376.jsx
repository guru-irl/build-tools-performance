import React from 'react';
const LABEL_40376 = 'component_40376';
export function Component40376({ value = 40376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40376, 'data-value': derived.doubled }, children);
}
export default Component40376;

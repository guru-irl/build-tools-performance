import React from 'react';
const LABEL_46376 = 'component_46376';
export function Component46376({ value = 46376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46376, 'data-value': derived.doubled }, children);
}
export default Component46376;

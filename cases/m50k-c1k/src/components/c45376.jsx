import React from 'react';
const LABEL_45376 = 'component_45376';
export function Component45376({ value = 45376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45376, 'data-value': derived.doubled }, children);
}
export default Component45376;

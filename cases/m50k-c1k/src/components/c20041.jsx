import React from 'react';
const LABEL_20041 = 'component_20041';
export function Component20041({ value = 20041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20041, 'data-value': derived.doubled }, children);
}
export default Component20041;

import React from 'react';
const LABEL_10041 = 'component_10041';
export function Component10041({ value = 10041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10041, 'data-value': derived.doubled }, children);
}
export default Component10041;

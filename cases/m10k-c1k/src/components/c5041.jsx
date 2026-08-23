import React from 'react';
const LABEL_5041 = 'component_5041';
export function Component5041({ value = 5041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5041, 'data-value': derived.doubled }, children);
}
export default Component5041;

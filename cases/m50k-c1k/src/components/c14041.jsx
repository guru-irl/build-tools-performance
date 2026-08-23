import React from 'react';
const LABEL_14041 = 'component_14041';
export function Component14041({ value = 14041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14041, 'data-value': derived.doubled }, children);
}
export default Component14041;

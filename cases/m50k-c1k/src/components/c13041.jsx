import React from 'react';
const LABEL_13041 = 'component_13041';
export function Component13041({ value = 13041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13041, 'data-value': derived.doubled }, children);
}
export default Component13041;

import React from 'react';
const LABEL_36041 = 'component_36041';
export function Component36041({ value = 36041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36041, 'data-value': derived.doubled }, children);
}
export default Component36041;

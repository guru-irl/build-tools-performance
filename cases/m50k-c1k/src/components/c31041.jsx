import React from 'react';
const LABEL_31041 = 'component_31041';
export function Component31041({ value = 31041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31041, 'data-value': derived.doubled }, children);
}
export default Component31041;

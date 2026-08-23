import React from 'react';
const LABEL_18041 = 'component_18041';
export function Component18041({ value = 18041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18041, 'data-value': derived.doubled }, children);
}
export default Component18041;

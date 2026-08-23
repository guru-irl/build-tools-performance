import React from 'react';
const LABEL_28041 = 'component_28041';
export function Component28041({ value = 28041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28041, 'data-value': derived.doubled }, children);
}
export default Component28041;

import React from 'react';
const LABEL_45041 = 'component_45041';
export function Component45041({ value = 45041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45041, 'data-value': derived.doubled }, children);
}
export default Component45041;

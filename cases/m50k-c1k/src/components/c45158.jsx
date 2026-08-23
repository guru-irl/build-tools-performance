import React from 'react';
const LABEL_45158 = 'component_45158';
export function Component45158({ value = 45158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45158, 'data-value': derived.doubled }, children);
}
export default Component45158;

import React from 'react';
const LABEL_17725 = 'component_17725';
export function Component17725({ value = 17725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17725, 'data-value': derived.doubled }, children);
}
export default Component17725;

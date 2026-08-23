import React from 'react';
const LABEL_21705 = 'component_21705';
export function Component21705({ value = 21705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21705, 'data-value': derived.doubled }, children);
}
export default Component21705;

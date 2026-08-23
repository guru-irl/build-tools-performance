import React from 'react';
const LABEL_33466 = 'component_33466';
export function Component33466({ value = 33466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33466, 'data-value': derived.doubled }, children);
}
export default Component33466;

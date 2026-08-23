import React from 'react';
const LABEL_17849 = 'component_17849';
export function Component17849({ value = 17849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17849, 'data-value': derived.doubled }, children);
}
export default Component17849;

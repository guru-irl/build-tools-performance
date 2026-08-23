import React from 'react';
const LABEL_17245 = 'component_17245';
export function Component17245({ value = 17245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17245, 'data-value': derived.doubled }, children);
}
export default Component17245;

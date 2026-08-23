import React from 'react';
const LABEL_17840 = 'component_17840';
export function Component17840({ value = 17840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17840, 'data-value': derived.doubled }, children);
}
export default Component17840;

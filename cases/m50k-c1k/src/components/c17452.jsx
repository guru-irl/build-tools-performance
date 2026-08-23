import React from 'react';
const LABEL_17452 = 'component_17452';
export function Component17452({ value = 17452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17452, 'data-value': derived.doubled }, children);
}
export default Component17452;

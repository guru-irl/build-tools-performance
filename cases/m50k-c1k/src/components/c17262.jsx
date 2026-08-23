import React from 'react';
const LABEL_17262 = 'component_17262';
export function Component17262({ value = 17262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17262, 'data-value': derived.doubled }, children);
}
export default Component17262;

import React from 'react';
const LABEL_17450 = 'component_17450';
export function Component17450({ value = 17450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17450, 'data-value': derived.doubled }, children);
}
export default Component17450;

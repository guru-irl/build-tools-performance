import React from 'react';
const LABEL_17343 = 'component_17343';
export function Component17343({ value = 17343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17343, 'data-value': derived.doubled }, children);
}
export default Component17343;

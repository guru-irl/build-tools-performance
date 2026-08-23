import React from 'react';
const LABEL_17016 = 'component_17016';
export function Component17016({ value = 17016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17016, 'data-value': derived.doubled }, children);
}
export default Component17016;

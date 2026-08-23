import React from 'react';
const LABEL_17166 = 'component_17166';
export function Component17166({ value = 17166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17166, 'data-value': derived.doubled }, children);
}
export default Component17166;

import React from 'react';
const LABEL_17382 = 'component_17382';
export function Component17382({ value = 17382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17382, 'data-value': derived.doubled }, children);
}
export default Component17382;

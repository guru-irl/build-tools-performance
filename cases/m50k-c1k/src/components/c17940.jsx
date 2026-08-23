import React from 'react';
const LABEL_17940 = 'component_17940';
export function Component17940({ value = 17940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17940, 'data-value': derived.doubled }, children);
}
export default Component17940;

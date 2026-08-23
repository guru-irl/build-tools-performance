import React from 'react';
const LABEL_17298 = 'component_17298';
export function Component17298({ value = 17298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17298, 'data-value': derived.doubled }, children);
}
export default Component17298;

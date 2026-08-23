import React from 'react';
const LABEL_22096 = 'component_22096';
export function Component22096({ value = 22096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22096, 'data-value': derived.doubled }, children);
}
export default Component22096;

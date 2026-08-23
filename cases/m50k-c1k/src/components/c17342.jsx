import React from 'react';
const LABEL_17342 = 'component_17342';
export function Component17342({ value = 17342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17342, 'data-value': derived.doubled }, children);
}
export default Component17342;
